const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET all orders with client information
router.get('/', async (req, res) => {
  try {
    const orders = await pool.query(`
      SELECT o.*, c.name as client_name, c.email as client_email
      FROM orders o
      JOIN clients c ON o.client_id = c.client_id
      ORDER BY o.created_at DESC
    `);

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET orders by client
router.get('/client/:clientId', async (req, res) => {
  try {
    const orders = await pool.query(
      'SELECT * FROM orders WHERE client_id = ? ORDER BY created_at DESC',
      [req.params.clientId]
    );

    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create order
router.post('/', async (req, res) => {
  const { client_id, order_date, total_amount, status } = req.body;
  if (!client_id || !order_date || !total_amount) {
    return res.status(400).json({ error: 'Client ID, order date, and total amount are required' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO orders (client_id, order_date, total_amount, status) VALUES (?, ?, ?, ?)',
      [client_id, order_date, total_amount, status || 'pending']
    );

    res.status(201).json({
      order_id: result.affectedRows.insertId,
      message: 'Pedido criado com sucesso'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update order
router.put('/:id', async (req, res) => {
  const { order_date, total_amount, status } = req.body;
  try {
    const result = await pool.query(
      'UPDATE orders SET order_date = ?, total_amount = ?, status = ? WHERE order_id = ?',
      [order_date, total_amount, status, req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    res.json({ message: 'Pedido atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE order
router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM orders WHERE order_id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }
    res.json({ message: 'Pedido deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;    
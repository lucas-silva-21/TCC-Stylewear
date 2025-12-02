const express = require('express');
const router = express.Router();
const pool = require('../db');


router.get('/', async (req, res) => {
  try {
    const rows = await pool.query(
      'SELECT id, name, email, senha, created_at FROM clients'
    );
    return res.json(rows);
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    return res.status(500).json({ error: 'Erro ao listar clientes.' });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const rows = await pool.query(
      'SELECT id, name, email, senha, created_at FROM clients WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

    return res.json(rows[0]);
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    return res.status(500).json({ error: 'Erro ao buscar cliente.' });
  }
});


router.post('/', async (req, res) => {
  const { name, email, senha } = req.body;

 
  if (!name || !email || !senha) {
    return res
      .status(400)
      .json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO clients (name, email, senha) VALUES (?, ?, ?)',
      [name, email, senha]
    );

    
    const id = result.insertId ?? null;

    return res.status(201).json({
      id,
      name,
      email,
      message: 'Cliente criado com sucesso.'
    });
  } catch (error) {
    console.error('Erro ao criar cliente:', error);

    
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ error: 'Email já cadastrado.' });
    }

   
    return res.status(500).json({
      error: error.message || 'Erro ao criar cliente.'
    });
  }
});

// Rota de login: autentica por email ou name + senha
router.post('/login', async (req, res) => {
  const { email, name, senha } = req.body;

  if ((!email && !name) || !senha) {
    return res.status(400).json({ error: 'Email ou nome e senha são obrigatórios.' });
  }

  try {
    let rows;
    if (email) {
      rows = await pool.query(
        'SELECT id, name, email FROM clients WHERE email = ? AND senha = ?',
        [email, senha]
      );
    } else {
      rows = await pool.query(
        'SELECT id, name, email FROM clients WHERE name = ? AND senha = ?',
        [name, senha]
      );
    }

    if (!rows || rows.length === 0) {
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // Retorna o cliente (sem a senha)
    return res.json(rows[0]);
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ error: 'Erro ao autenticar usuário.' });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, senha } = req.body;

  if (!name || !email || !senha) {
    return res
      .status(400)
      .json({ error: 'Nome, email e senha são obrigatórios.' });
  }

  try {
    const result = await pool.query(
      'UPDATE clients SET name = ?, email = ?, senha = ? WHERE id = ?',
      [name, email, senha, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

    return res.json({ message: 'Cliente atualizado com sucesso.' });
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    return res.status(500).json({ error: 'Erro ao atualizar cliente.' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM clients WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

    return res.json({ message: 'Cliente removido com sucesso.' });
  } catch (error) {
    console.error('Erro ao remover cliente:', error);
    return res.status(500).json({ error: 'Erro ao remover cliente.' });
  }
});

module.exports = router;

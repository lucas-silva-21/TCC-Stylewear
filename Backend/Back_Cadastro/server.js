const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
const clientRoutes = require('./routes/clients.js');
const orderRoutes = require('./routes/orders.js');


app.use('/api/clients', clientRoutes);
app.use('/api/orders', orderRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.json({
    message: 'API rodando!',
    timestamp: new Date().toISOString()
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
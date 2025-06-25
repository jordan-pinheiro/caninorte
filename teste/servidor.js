const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Conexão com o banco
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // sua senha do MySQL
  database: 'petshop'
});

db.connect(err => {
  if (err) return console.error('Erro ao conectar:', err);
  console.log('MySQL conectado!');
});

app.use(express.static(path.join(__dirname, 'public')));

// Rota para listar produtos
app.get('/api/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).send('Erro no banco');
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

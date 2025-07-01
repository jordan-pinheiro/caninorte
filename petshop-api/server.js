const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conexão com o banco
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petshop' // ou 'cadastro_usuario' se você criou com esse nome
});

db.connect(err => {
  if (err) {
    console.error('Erro na conexão com o banco:', err);
  } else {
    console.log('✅ Conectado ao banco MySQL');
  }
});

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Buscar produtos
app.get('/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Cadastrar novo usuário
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }

  const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, senha], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao cadastrar usuário', detalhes: err });
    }

    res.status(201).json({
      id: result.insertId,
      nome,
      email
    });
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

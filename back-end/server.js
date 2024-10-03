const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'db-falcommerce.c5ckokgky19q.us-east-1.rds.amazonaws.com', 
    port: "3306",
    user: 'FalcommerceMYSQL',
    password: 'Muitochato10',
    database:  'Falcommerce-DB'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL.');
});

// Rota de teste
app.get('/', (req, res) => {
    res.send('Bem-vindo à Falcommerce!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
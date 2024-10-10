//server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');  //serve para extrair o corpo das requisições e torna acessivel para o codigo
const sequelize = require('./src/config/db');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Importar rotas
const authRoutes = require('./src/routes/authRoutes')

//Usar rotas
app.use('/api/auth', authRoutes);

//Rota básica para teste
app.get('/', (req, res) => {
    res.send('Bem-vindo a API da Falcommerce');
});

//Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message:'Erro interno do servidor'});
});

//Definir a porta
const PORT = process.env.PORT|| 3000;

// Sincronizar com o banco de dados e iniciar o servidor
sequelize.sync({ alter: true }) // Adicionamos { alter: true } aqui
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso.');
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
            console.log(`Rotas de autenticação disponíveis em http://localhost:${PORT}/api/auth`);
        });
    })
    .catch(err => {
        console.error('Erro ao sincronizar com o banco de dados', err);
    });
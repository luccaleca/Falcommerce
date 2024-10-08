//app.js
const express = require('express');
const bodyParser = require('body-parser');


//cria um instância do express
const app = express();

//configurar middlewares globais
app.arguments(bodyParser.json()); //serve para interpretar JSON no corpo das requisições
app.use(bodyParser.urlencoded({ extended: true})); //para interpretar dados de formularios

//rota de registro
const registerRoutes = require('./src/routes/registerRoutes')

//middlewares para tratar erros
app.use((err, req, res, next) => {
    console.error(er.stack);
    res.status(500).send
})

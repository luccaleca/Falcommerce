require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/db');

const authRoutes = require('./src/routes/authRoutes');
const assinaturaRoutes = require('./src/routes/assinaturaRoutes'); 
const solicitacaoFuncionalidadeRoutes = require('./src/routes/solicitacaoFuncionalidadeRoutes');


const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3001', // URL do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar rotas
app.use('/auth', authRoutes);
app.use('/assinatura', assinaturaRoutes); 
<<<<<<< HEAD
app.use('/solicitacaoFuncionalidade', solicitacaoFuncionalidadeRoutes); 
=======
app.use('/solicitacoesFuncionalidade', solicitacoesFuncionalidadeRoutes); 
>>>>>>> 8856e814d9e825c65159e1c63f544e5317a67936


// Middleware para tratar erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro interno do servidor');
});

// Inicializando o servidor
sequelize.sync({ alter: true }).then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.error('Erro ao sincronizar com o banco de dados', err);
});
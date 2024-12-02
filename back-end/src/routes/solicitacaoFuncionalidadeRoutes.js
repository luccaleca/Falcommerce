const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const solicitacaoFuncionalidadeController = require('../controllers/solicitacaoFuncionalidadeController');

// Define a rota para criar uma nova solicitação
router.post('/', solicitacaoFuncionalidadeController.criarSolicitacao);
=======
const solicitacoesController = require('../controllers/solicitacaoFuncionalidadeController');

// Define a rota para criar uma nova solicitação
router.post('/solicitacoesFuncionalidade', solicitacoesController.criarSolicitacao);
>>>>>>> 8856e814d9e825c65159e1c63f544e5317a67936

module.exports = router;
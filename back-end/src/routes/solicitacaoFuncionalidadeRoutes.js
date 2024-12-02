const express = require('express');
const router = express.Router();
const solicitacaoFuncionalidadeController = require('../controllers/solicitacaoFuncionalidadeController');

// Define a rota para criar uma nova solicitação
router.post('/', solicitacaoFuncionalidadeController.criarSolicitacao);

module.exports = router;
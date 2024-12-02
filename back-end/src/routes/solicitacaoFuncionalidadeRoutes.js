const express = require('express');
const router = express.Router();
const solicitacoesController = require('../controllers/solicitacaoFuncionalidadeController');

// Define a rota para criar uma nova solicitação
router.post('/solicitacoesFuncionalidade', solicitacoesController.criarSolicitacao);

module.exports = router;
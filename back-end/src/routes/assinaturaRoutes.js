const express = require('express');
const router = express.Router();
const assinaturaController = require('../controllers/assinaturaController');
const authMiddleware = require('../middlewares/authMidlleware'); 

// Rota para iniciar assinatura
router.post('/assinar', authMiddleware, assinaturaController.assinarPlano);

module.exports = router;
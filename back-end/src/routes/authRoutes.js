//src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMidlleware')

//Rotas de autenticação
router.post('/register', authController.register);
router.post('/login', authController.login);

//Rota para obter informações do usuario autenticado
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
//src/routes/registerRoutes.js

const express = require('express');
const registerController = require('../controllers/registerController')
const validateRequest = require('../middleware/validateRequest')

const router = express.Router();

//Define a rota de cadastro com validação e requisição
router.post('/register', validadeRequest, RegisterController.registerUser);

module.exports = router;
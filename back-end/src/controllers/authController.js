// src/controllers/authController.js
const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const { nome_usuario, email, senha } = req.body;
        const result = await authService.register(nome_usuario, email, senha);
        res.status(201).json({
            message: 'Usuário registrado com sucesso',
            user: result.user,
            token: result.token
        });
    } catch (error) {
        console.error('Erro no registro:', error);
        if (error.message === 'Usuário já existe') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const result = await authService.login(email, senha);
        res.json({
            message: 'Login bem-sucedido',
            user: result.user,
            token: result.token
        });
    } catch (error) {
        console.error('Erro no login:', error);
        if (error.message === 'Credenciais inválidas') {
            return res.status(401).json({ message: error.message });
        }
        res.status(500).json({ message: 'Erro ao fazer login' });
    }
};

exports.logout = (req, res) => {
    res.status(200).json({
        message: 'Logout realizado com sucesso',
        info: 'O token deve ser removido no lado do cliente'
    });
};

// aqui pode adicionar mais funções de autenticação
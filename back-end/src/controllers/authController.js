// src/controllers/authController.js
const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
        const { nome_usuario, email, senha } = req.body;
        console.log('Dados recebidos para registro:', req.body); // Log para verificar dados recebidos
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
        res.status(500).json({ message: 'Erro interno do servidor ao registrar usuário' });
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
        res.status(500).json({ message: 'Erro interno do servidor ao fazer login' });
    }
};

// Função para obter informações do usuário autenticado
exports.getMe = async (req, res) => {
    try {
        const userId = req.user.id; // ID do usuário extraído pelo middleware
        const user = await authService.getUserById(userId); // Usar o serviço para buscar o usuário

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        res.json(user);
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        res.status(500).json({ message: 'Erro ao buscar dados do usuário' });
    }
};


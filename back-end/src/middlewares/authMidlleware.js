// src/middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

const authMiddleware = (req, res, next) => {
    
    // Obtém o token do cabeçalho da requisição
    const token = req.header('Authorization')?.replace(/^Bearer\s/, '');

    // Verifica se o token existe
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido' });
    }

    try {
        // Verifica se o token é válido
        const decoded = authService.verifyToken(token);

        // Adiciona as informações do usuário decodificadas à requisição
        req.user = decoded;

        // Passa para o próximo middleware ou rota
        next();
    } catch (error) {
        // Trata diferentes tipos de erros JWT
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: 'Token expirado' });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        res.status(500).json({ message: 'Erro interno do servidor ao verificar token' });
    }
};

module.exports = authMiddleware;
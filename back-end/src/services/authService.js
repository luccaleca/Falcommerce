// src/services/authService.js

const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail, User } = require('../models/userModels');

class AuthService {
    async register(nome_usuario, email, senha) {
        const userExists = await findUserByEmail(email);
        if (userExists) {
            throw new Error('Usuário já existe');
        }

        const newUser = await createUser(nome_usuario, senha, email);
        const token = this.generateToken(newUser.id);

        return { user: newUser, token };
    }

    async login(email, senha) {
        const user = await findUserByEmail(email);
        if (!user) {
            console.log('Usuário não encontrado');
            throw new Error('Credenciais inválidas');
        }

        if (senha !== user.senha) {
            console.log('Senha inválida');
            throw new Error('Credenciais inválidas');
        }

        const token = this.generateToken(user.id);
        return { user, token };
    }

    generateToken(userId) {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Token inválido');
        }
    }

    async getUserById(userId) {
        try {
            const user = await User.findByPk(userId, { attributes: ['id', 'nome_usuario', 'email'] });
            if (!user) {
                throw new Error('Usuário não encontrado');
            }
            return user;
        } catch (error) {
            console.error('Erro ao buscar usuário pelo ID:', error);
            throw error;
        }
    }
}

module.exports = new AuthService();
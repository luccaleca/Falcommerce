// src/services/authService.js

const jwt = require('jsonwebtoken'); // Certifique-se de que esta linha está presente
const { createUser, findUserByEmail } = require('../models/userModels');

class AuthService {
    async register(nome_usuario, email, senha) {
        const userExists = await findUserByEmail(email);
        if (userExists) {
            throw new Error('Usuário já existe');
        }

        const newUser = await createUser(nome_usuario, email, senha);
        const token = this.generateToken(newUser.id);

        return { user: newUser, token };
    }

    async login(email, senha) {
        const user = await findUserByEmail(email);
        if (!user) {
            console.log('Usuário não encontrado');
            throw new Error('Credenciais inválidas');
        }
    
        // Comparação simples de senha
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
}

module.exports = new AuthService();
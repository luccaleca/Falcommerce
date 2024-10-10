// src/services/authService.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, createUser, findUserByEmail } = require('../models/userModels');

class AuthService {
    async register(nome_usuario, email, senha) {
        const userExists = await findUserByEmail(email);
        if (userExists) {
            throw new Error('Usuário já existe');
        }

        const salt = await bcrypt.genSalt(10);
        const senha_hash = await bcrypt.hash(senha, salt);
        const newUser = await createUser(nome_usuario, email, senha);
    const token = this.generateToken(newUser.id);

        return { user: newUser, token };
    }

    async login(email, senha) {
        const user = await findUserByEmail(email);
        if (!user) {
            throw new Error('Credenciais inválidas');
        }

        const isPasswordValid = await bcrypt.compare(senha, user.senha_hash);
        if (!isPasswordValid) {
            throw new Error('Credenciais inválidas');
        }

        const token = this.generateToken(user.id);

        return { user, token };
    }

    generateToken(userId) {
        return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    async verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Token inválido');
        }
    }

    async updatePassword(userId, oldPassword, newPassword) {
        const user = await User.findByPk(userId);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const isPasswordValid = await bcrypt.compare(oldPassword, user.senha_hash);
        if(!isPasswordValid) {
            throw new Error('Senha atual inválida')
        }

        const salt = await bcrypt.genSalt(10);
        const newPasswordHash = await bcrypt.hash(newPassword, salt);

        user.senha_hash = newPasswordHash;
        await user.save();

        return { message: 'Senha atualizada com sucesso' };
    }
}

module.exports = new AuthService();
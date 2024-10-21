// src/models/user/userModels.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome_usuario: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
}, {
    tableName: 'tb_usuarios',
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

const createUser = async (nome_usuario, email, senha) => {
    try {
        const newUser = await User.create({
            nome_usuario,
            email,
            senha
        });
        return newUser;
    } catch (error) {
        console.error('Erro ao criar usuário', error);
        throw error;
    }
};

const findUserByEmail = async (email) => {
    try {
        return await User.findOne({ where: { email } });
    } catch (error) {
        console.error('Erro ao buscar usuário', error);
        throw error;
    }
};

module.exports = {
    User,
    createUser,
    findUserByEmail
};
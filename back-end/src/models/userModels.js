// src/models/user/userModels.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

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
    senha_hash: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    token_recuperacao: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    data_expiracao_token: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'tb_usuarios',
    timestamps: true,
    createdAt: 'criado_em',
    updatedAt: 'atualizado_em'
});

// Método para comparar senhas
User.prototype.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.senha_hash);
};

// Hook para hash da senha antes de salvar
User.beforeCreate(async (user) => {
    if (user.senha_hash) {
        const salt = await bcrypt.genSalt(10);
        user.senha_hash = await bcrypt.hash(user.senha_hash, salt);
    }
});

// Método para excluir campos sensíveis ao serializar
User.prototype.toJSON = function() {
    const values = Object.assign({}, this.get());
    delete values.senha_hash;
    delete values.token_recuperacao;
    return values;
};

const createUser = async (nome_usuario, email, senha) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const senha_hash = await bcrypt.hash(senha, salt);
        const newUser = await User.create({
            nome_usuario,
            email,
            senha_hash
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
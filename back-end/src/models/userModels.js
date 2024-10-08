const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/db'); 

const createUser = async (nome_usuario, senha, email) => {
    const senha_hash = await bcrypt.hash(senha, 10);
    const token_recuperacao = null; //começa como nulo
    const data_expira = null; //começa nulo tambem
    const criado_em = new Date();
    const atualizado_em = new Date();

    const query = 
    `INSERT INTO tb_usuarios (nome_usuario, senha_hash,email,token_recuperacao, data_expira, criado_em, atualizado_em)
    VALUES (?,?,?,?,?,?,?)
    `;

    await db.execute(query, [nome_usuario, senha_hash, email, token_recuperacao, data_expira, criado_em, atualizado_em]);
};

module.exports = { createUser }
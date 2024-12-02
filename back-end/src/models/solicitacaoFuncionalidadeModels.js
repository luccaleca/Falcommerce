const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { User } = require('./userModels'); 

<<<<<<< HEAD
const SolicitacaoFuncionalidade = sequelize.define('SolicitacaoFuncionalidade', {
=======
const SolicitacaoFuncionalidade = sequelize.define('SolicitacoesFuncionalidade', {
>>>>>>> 8856e814d9e825c65159e1c63f544e5317a67936
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuarioId: { 
        type: DataTypes.INTEGER,
        references: {
            model: User, 
            key: 'id'
        },
        allowNull: false
    },
    funcionalidadeId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tipo: {
        type: DataTypes.ENUM('hibrida', 'personalizada'),
        allowNull: false
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('solicitado', 'em_progresso', 'concluido'),
        defaultValue: 'solicitado'
    },
    dataSolicitacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
<<<<<<< HEAD
    tableName: 'tb_solicitacao_funcionalidade',
=======
    tableName: 'tb_solicitacoes_funcionalidade',
>>>>>>> 8856e814d9e825c65159e1c63f544e5317a67936
    timestamps: false
});

module.exports = SolicitacaoFuncionalidade;
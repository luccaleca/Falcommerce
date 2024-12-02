const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const { User } = require('./userModels'); 

const SolicitacaoFuncionalidade = sequelize.define('SolicitacaoFuncionalidade', {
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
    tableName: 'tb_solicitacao_funcionalidade',
    timestamps: false
});

module.exports = SolicitacaoFuncionalidade;
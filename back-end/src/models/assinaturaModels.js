// src/models/assinaturaModels.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModels').User;
const Plano = require('./planoModels').Plano;

const Assinatura = sequelize.define('Assinatura', {
  assinatura_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User, 
      key: 'id'
    }
  },
  plano_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Plano,
      key: 'plano_id'
    }
  },
  status: {
    type: DataTypes.ENUM('ativo', 'inativo', 'cancelado'),
    defaultValue: 'ativo'
  },
  data_inicio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  data_fim: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'tb_assinatura',
  timestamps: false
});

module.exports = Assinatura;
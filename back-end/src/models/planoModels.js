const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Plano = sequelize.define('Plano', {
  plano_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  vales_padrao: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vales_perso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vales_hibrida: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  desconto_funcionalidade_padrao: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      min: 0,
      max: 100
    }
  },
  desconto_funcionalidade_perso: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      min: 0,
      max: 100
    }
  },
  desconto_funcionalidade_hibrida: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      min: 0,
      max: 100
    }
  }
}, {
  tableName: 'tb_planos',
  timestamps: false 
});

module.exports = { Plano };
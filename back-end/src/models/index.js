// src/models/index.js 

const { User } = require('./userModels');
const { Plano } = require('./planoModels');
const  Assinatura  = require('./assinaturaModels');

// Associações

//User e Assinatura
User.hasMany(Assinatura, { foreignKey: 'usuario_id' });
Assinatura.belongsTo(User, { foreignKey: 'usuario_id' });


//Plano e Assinatura
Plano.hasMany(Assinatura, { foreignKey: 'plano_id' });
Assinatura.belongsTo(Plano, { foreignKey: 'plano_id' });
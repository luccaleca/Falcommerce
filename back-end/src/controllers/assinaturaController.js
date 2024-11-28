const { User } = require('../models/userModels');
const  Assinatura  = require('../models/assinaturaModels');
const { Plano } = require('../models/planoModels');
const sequelize = require('../config/db');




exports.assinarPlano = async (req, res) => {
  try {
    const { usuario_id, plano_id } = req.body; 

    console.log('Received request to assinarPlano with:', { usuario_id, plano_id });
    console.log('Assinatura model:', Assinatura);

    // Verifica se o usuário existe
    const usuario = await User.findByPk(usuario_id);
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    // Verifica se o plano existe
    const plano = await Plano.findByPk(plano_id);
    if (!plano) {
      return res.status(404).json({ mensagem: 'Plano não encontrado' });
    }

    // Cria a assinatura
    const assinatura = await Assinatura.create({
      usuario_id,
      plano_id,
      status:'ativo'
    });

    res.status(201).json({
      mensagem: 'Assinatura realizada com sucesso',
      assinatura
    });

  } catch (erro) {
    console.error('Erro ao realizar assinatura:', erro);
    res.status(500).json({ mensagem: 'Erro interno do servidor' });
  }
};
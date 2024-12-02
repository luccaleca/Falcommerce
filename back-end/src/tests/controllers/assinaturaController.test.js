// tests/controllers/assinaturaController.test.js

const request = require('supertest');
const app = require('../../../server'); 
const { User } = require('../../models/userModels');
const { Plano } = require('../../models/planoModels');
const Assinatura = require('../../models/assinaturaModels');

// Mockando modelos do Sequelize
jest.mock('../../src/models/userModels');
jest.mock('../../src/models/planoModels');
jest.mock('../../src/models/assinaturaModels');

describe('AssinaturaController', () => {
  describe('assinarPlano', () => {

    it('deve retornar 404 se o usuário não for encontrado', async () => {
      User.findByPk.mockResolvedValue(null);

      const res = await request(app)
        .post('/api/assinaturas') // Defina o endpoint correto
        .send({ usuario_id: 1, plano_id: 1 });

      expect(res.statusCode).toBe(404);
      expect(res.body.mensagem).toBe('Usuário não encontrado');
    });

    it('deve retornar 404 se o plano não for encontrado', async () => {
      User.findByPk.mockResolvedValue({ id: 1 });
      Plano.findByPk.mockResolvedValue(null);

      const res = await request(app)
        .post('/api/assinaturas')
        .send({ usuario_id: 1, plano_id: 1 });

      expect(res.statusCode).toBe(404);
      expect(res.body.mensagem).toBe('Plano não encontrado');
    });

    it('deve criar uma assinatura com sucesso', async () => {
      User.findByPk.mockResolvedValue({ id: 1 });
      Plano.findByPk.mockResolvedValue({ id: 1 });
      Assinatura.create.mockResolvedValue({
        id: 1,
        usuario_id: 1,
        plano_id: 1,
        status: 'ativo'
      });

      const res = await request(app)
        .post('/api/assinaturas')
        .send({ usuario_id: 1, plano_id: 1 });

      expect(res.statusCode).toBe(201);
      expect(res.body.mensagem).toBe('Assinatura realizada com sucesso');
      expect(res.body.assinatura).toEqual({
        id: 1,
        usuario_id: 1,
        plano_id: 1,
        status: 'ativo'
      });
    });

    it('deve retornar 500 em caso de erro interno do servidor', async () => {
      User.findByPk.mockRejectedValue(new Error('Erro interno'));

      const res = await request(app)
        .post('/api/assinaturas')
        .send({ usuario_id: 1, plano_id: 1 });

      expect(res.statusCode).toBe(500);
      expect(res.body.mensagem).toBe('Erro interno do servidor');
    });

  });
});
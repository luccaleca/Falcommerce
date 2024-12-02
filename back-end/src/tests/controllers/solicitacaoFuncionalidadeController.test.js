// tests/controllers/solicitacaoFuncionalidadeController.test.js

const request = require('supertest');
const app = require('../../../server'); 
const solicitacaoFuncionalidadeService = require('../../services/solicitacaoFuncionalidadeService');

// Mocka solicitacaoFuncionalidadeService
jest.mock('../../services/solicitacaoFuncionalidadeService');

describe('SolicitacaoFuncionalidadeController', () => {
  describe('criarSolicitacao', () => {

    it('deve criar uma nova solicitação com sucesso', async () => {
      const mockSolicitacao = {
        id: 1,
        usuarioId: 1,
        funcionalidadeId: 1,
        tipo: 'novaFuncionalidade',
        departamento: 'TI',
        descricao: 'Descrição da solicitação'
      };

      solicitacaoFuncionalidadeService.criarSolicitacao.mockResolvedValue(mockSolicitacao);

      const res = await request(app)
        .post('/api/solicitacoes') // Ajuste o endpoint conforme necessário
        .send({
          usuarioId: 1,
          funcionalidadeId: 1,
          tipo: 'novaFuncionalidade',
          departamento: 'TI',
          descricao: 'Descrição da solicitação'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({
        message: 'Solicitação criada com sucesso',
        solicitacao: mockSolicitacao
      });
    });

    it('deve retornar 400 em caso de erro durante a criação da solicitação', async () => {
      const errorMessage = 'Erro ao criar solicitação';

      solicitacaoFuncionalidadeService.criarSolicitacao.mockRejectedValue(new Error(errorMessage));

      const res = await request(app)
        .post('/api/solicitacoes')
        .send({
          usuarioId: 1,
          funcionalidadeId: 1,
          tipo: 'novaFuncionalidade',
          departamento: 'TI',
          descricao: 'Descrição da solicitação'
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe(errorMessage);
    });

  });
});
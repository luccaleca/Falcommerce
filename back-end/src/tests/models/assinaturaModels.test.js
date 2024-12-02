// tests/models/assinaturaModels.test.js

const { Sequelize } = require('sequelize');
const Assinatura = require('../../models/assinaturaModels');
const User = require('../../models/userModels').User;
const Plano = require('../../models/planoModels').Plano;

describe('Assinatura Model', () => {
  beforeAll(async () => {
    // Configure um banco de dados em memória para testes
    await sequelize.sync({ force: true });
  });

  it('deve definir o modelo Assinatura com as colunas corretas', async () => {
    expect(Assinatura.rawAttributes.assinatura_id).toBeDefined();
    expect(Assinatura.rawAttributes.usuario_id).toBeDefined();
    expect(Assinatura.rawAttributes.plano_id).toBeDefined();
    expect(Assinatura.rawAttributes.status).toBeDefined();
    expect(Assinatura.rawAttributes.data_inicio).toBeDefined();
    expect(Assinatura.rawAttributes.data_fim).toBeDefined();
  });

  it('deve definir a chave primária e as chaves estrangeiras corretamente', () => {
    expect(Assinatura.primaryKeyAttribute).toBe('assinatura_id');

    expect(Assinatura.rawAttributes.usuario_id.references.model).toBe(User);
    expect(Assinatura.rawAttributes.plano_id.references.model).toBe(Plano);
  });

  it('deve ter status padrão como "ativo"', async () => {
    const novaAssinatura = await Assinatura.create({
      usuario_id: 1,
      plano_id: 1
    });
    expect(novaAssinatura.status).toBe('ativo');
  });

  it('deve lançar um erro se um status inválido for definido', async () => {
    await expect(Assinatura.create({
      usuario_id: 1,
      plano_id: 1,
      status: 'invalidStatus'
    })).rejects.toThrow();
  });

  it('deve permitir definir data_inicio e data_fim', async () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 30);

    const novaAssinatura = await Assinatura.create({
      usuario_id: 1,
      plano_id: 1,
      data_inicio: startDate,
      data_fim: endDate
    });

    expect(novaAssinatura.data_inicio).toEqual(startDate);
    expect(novaAssinatura.data_fim).toEqual(endDate);
  });
});
// tests/models/planoModels.test.js

const { Sequelize } = require('sequelize');
const { Plano } = require('../../models/planoModels');

describe('Plano Model', () => {
  let sequelize;

  beforeAll(async () => {
    // Criar uma instância separada do Sequelize para testes com banco de dados em memória
    sequelize = new Sequelize('sqlite::memory:', { logging: false });

    // Sincronizar a definição do modelo com o banco de dados
    await sequelize.define('Plano', Plano.rawAttributes).sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('deve definir o modelo Plano com as colunas corretas', () => {
    expect(Plano.rawAttributes.plano_id).toBeDefined();
    expect(Plano.rawAttributes.nome).toBeDefined();
    expect(Plano.rawAttributes.descricao).toBeDefined();
    expect(Plano.rawAttributes.preco).toBeDefined();
    expect(Plano.rawAttributes.vales_padrao).toBeDefined();
    expect(Plano.rawAttributes.vales_perso).toBeDefined();
    expect(Plano.rawAttributes.vales_hibrida).toBeDefined();
    expect(Plano.rawAttributes.desconto_funcionalidade_padrao).toBeDefined();
    expect(Plano.rawAttributes.desconto_funcionalidade_perso).toBeDefined();
    expect(Plano.rawAttributes.desconto_funcionalidade_hibrida).toBeDefined();
  });

  it('deve ter plano_id como chave primária', () => {
    expect(Plano.primaryKeyAttribute).toBe('plano_id');
  });

  it('deve falhar ao cadastrar um plano sem nome', async () => {
    const plano = Plano.build({
      preco: 29.99,
      vales_padrao: 5,
      vales_perso: 3,
      vales_hibrida: 2,
      desconto_funcionalidade_padrao: 10,
      desconto_funcionalidade_perso: 15,
      desconto_funcionalidade_hibrida: 20,
    });

    await expect(plano.validate()).rejects.toThrow();
  });

  it('deve falhar ao cadastrar um plano com desconto fora do limite', async () => {
    const plano = Plano.build({
      nome: 'Plano Premium',
      preco: 29.99,
      vales_padrao: 5,
      vales_perso: 3,
      vales_hibrida: 2,
      desconto_funcionalidade_padrao: 110, // inválido
      desconto_funcionalidade_perso: 15,
      desconto_funcionalidade_hibrida: 20,
    });

    await expect(plano.validate()).rejects.toThrow();
  });

  it('deve cadastrar um plano com sucesso com dados válidos', async () => {
    const plano = await Plano.create({
      nome: 'Plano Básico',
      preco: 19.99,
      vales_padrao: 5,
      vales_perso: 3,
      vales_hibrida: 2,
      desconto_funcionalidade_padrao: 10,
      desconto_funcionalidade_perso: 5,
      desconto_funcionalidade_hibrida: 8,
    });

    expect(plano.nome).toBe('Plano Básico');
    expect(plano.preco).toBe(19.99);
  });
});
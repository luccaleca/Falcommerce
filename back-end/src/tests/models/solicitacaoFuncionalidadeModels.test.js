// tests/models/solicitacaoFuncionalidadeModels.test.js

const { Sequelize, DataTypes } = require('sequelize');
const SolicitacaoFuncionalidade = require('../../models/solicitacaoFuncionalidadeModels');
const { User } = require('../../models/userModels');

describe('SolicitacaoFuncionalidade Model', () => {
  let sequelize;

  beforeAll(async () => {
    // Configurar banco de dados em memória
    sequelize = new Sequelize('sqlite::memory:', { logging: false });
    
    // Definir modelos de teste
    await sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    }).sync({ force: true });

    await sequelize.define('SolicitacaoFuncionalidade', SolicitacaoFuncionalidade.rawAttributes).sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('deve definir o modelo SolicitacaoFuncionalidade com as colunas corretas', () => {
    expect(SolicitacaoFuncionalidade.rawAttributes.id).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.usuarioId).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.funcionalidadeId).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.tipo).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.departamento).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.descricao).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.status).toBeDefined();
    expect(SolicitacaoFuncionalidade.rawAttributes.dataSolicitacao).toBeDefined();
  });

  it('deve ter id como chave primária', () => {
    expect(SolicitacaoFuncionalidade.primaryKeyAttribute).toBe('id');
  });

  it('deve definir valores padrão corretamente', async () => {
    const solicitacao = await SolicitacaoFuncionalidade.create({
      usuarioId: 1,
      tipo: 'hibrida',
      departamento: 'Desenvolvimento'
    });

    expect(solicitacao.status).toBe('solicitado');
    expect(solicitacao.dataSolicitacao).toBeInstanceOf(Date);
  });

  it('deve falhar ao criar uma solicitação com tipo inválido', async () => {
    const solicitacao = SolicitacaoFuncionalidade.build({
      usuarioId: 1,
      tipo: 'invalido',  
      departamento: 'Desenvolvimento'
    });

    await expect(solicitacao.validate()).rejects.toThrow();
  });

  it('deve falhar ao criar uma solicitação sem usuarioId', async () => {
    const solicitacao = SolicitacaoFuncionalidade.build({
      tipo: 'personalizada',
      departamento: 'Marketing'
    });

    await expect(solicitacao.validate()).rejects.toThrow();
  });

  it('deve permitir criar uma solicitação válida', async () => {
    const solicitacao = await SolicitacaoFuncionalidade.create({
      usuarioId: 1,
      tipo: 'personalizada',
      departamento: 'TI',
      descricao: 'Desenvolvimento de nova feature'
    });

    expect(solicitacao.departamento).toBe('TI');
    expect(solicitacao.tipo).toBe('personalizada');
  });
});
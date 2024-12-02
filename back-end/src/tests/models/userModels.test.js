// tests/models/userModels.test.js

const { Sequelize, DataTypes } = require('sequelize');
const { User, createUser, findUserByEmail } = require('../../models/userModels');

describe('User Model', () => {
  let sequelize;

  beforeAll(async () => {
    // Criar instância do Sequelize para testes
    sequelize = new Sequelize('sqlite::memory:', { logging: false });

    // Definir e sincronizar o modelo de teste com o banco de dados em memória
    await sequelize.define('User', User.rawAttributes, {
      tableName: 'tb_usuarios',
      timestamps: true,
      createdAt: 'criado_em',
      updatedAt: 'atualizado_em'
    }).sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('deve definir o modelo User com as colunas corretas', () => {
    expect(User.rawAttributes.id).toBeDefined();
    expect(User.rawAttributes.nome_usuario).toBeDefined();
    expect(User.rawAttributes.email).toBeDefined();
    expect(User.rawAttributes.senha).toBeDefined();
  });

  it('deve ter id como chave primária', () => {
    expect(User.primaryKeyAttribute).toBe('id');
  });

  it('deve validar email como único e em formato correto', async () => {
    const usuario = User.build({
      nome_usuario: 'Test User',
      email: 'invalid-email',
      senha: 'password123'
    });

    await expect(usuario.validate()).rejects.toThrow();

    await createUser('Test User', 'test@example.com', 'password123');
    const duplicateUser = User.build({
      nome_usuario: 'Duplicate User',
      email: 'test@example.com',
      senha: 'password123'
    });

    await expect(duplicateUser.save()).rejects.toThrow();
  });

  it('deve criar um usuário com sucesso', async () => {
    const usuario = await createUser('Novo User', 'novo@example.com', 'password123');
    expect(usuario).toBeDefined();
    expect(usuario.email).toBe('novo@example.com');
  });

  it('deve encontrar um usuário por email', async () => {
    const usuario = await findUserByEmail('novo@example.com');
    expect(usuario).toBeDefined();
    expect(usuario.nome_usuario).toBe('Novo User');
  });

  it('deve falhar ao criar um usuário sem nome de usuário', async () => {
    const usuario = User.build({
      email: 'no-name@example.com',
      senha: 'password123'
    });

    await expect(usuario.validate()).rejects.toThrow();
  });

  it('deve falhar ao criar um usuário sem senha', async () => {
    const usuario = User.build({
      nome_usuario: 'Test User',
      email: 'nosenha@example.com'
    });

    await expect(usuario.validate()).rejects.toThrow();
  });
});
// tests/controllers/authController.test.js

const request = require('supertest');
const app = require('../../../server'); 
const authService = require('../../services/authService');

// Mocka o authService
jest.mock('../../services/authService');

describe('AuthController', () => {
  describe('register', () => {
    it('deve registrar um usuário com sucesso', async () => {
      const mockUser = { id: 1, nome_usuario: 'Test User', email: 'test@example.com' };
      const mockToken = 'valid-token';

      authService.register.mockResolvedValue({ user: mockUser, token: mockToken });

      const res = await request(app)
        .post('/api/register') // Ajuste o endpoint conforme necessário
        .send({ nome_usuario: 'Test User', email: 'test@example.com', senha: 'password123' });

      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({
        message: 'Usuário registrado com sucesso',
        user: mockUser,
        token: mockToken
      });
    });

    it('deve retornar 400 se o usuário já existe', async () => {
      authService.register.mockRejectedValue(new Error('Usuário já existe'));

      const res = await request(app)
        .post('/api/register')
        .send({ nome_usuario: 'Test User', email: 'existing@example.com', senha: 'password123' });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toBe('Usuário já existe');
    });

    it('deve retornar 500 em caso de erro interno', async () => {
      authService.register.mockRejectedValue(new Error('Erro interno do servidor'));

      const res = await request(app)
        .post('/api/register')
        .send({ nome_usuario: 'Test User', email: 'error@example.com', senha: 'password123' });

      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe('Erro interno do servidor ao registrar usuário');
    });
  });

  describe('login', () => {
    it('deve realizar login com sucesso', async () => {
      const mockUser = { id: 1, nome_usuario: 'Test User', email: 'test@example.com' };
      const mockToken = 'valid-token';

      authService.login.mockResolvedValue({ user: mockUser, token: mockToken });

      const res = await request(app)
        .post('/api/login')
        .send({ email: 'test@example.com', senha: 'password123' });

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({
        message: 'Login bem-sucedido',
        user: mockUser,
        token: mockToken
      });
    });

    it('deve retornar 401 para credenciais inválidas', async () => {
      authService.login.mockRejectedValue(new Error('Credenciais inválidas'));

      const res = await request(app)
        .post('/api/login')
        .send({ email: 'invalid@example.com', senha: 'wrongpassword' });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toBe('Credenciais inválidas');
    });

    it('deve retornar 500 em caso de erro interno ao fazer login', async () => {
      authService.login.mockRejectedValue(new Error('Erro interno do servidor'));

      const res = await request(app)
        .post('/api/login')
        .send({ email: 'error@example.com', senha: 'password123' });

      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe('Erro interno do servidor ao fazer login');
    });
  });

  describe('getMe', () => {
    it('deve retornar os dados do usuário autenticado', async () => {
      const mockUser = { id: 1, nome_usuario: 'Test User', email: 'test@example.com' };

      authService.getUserById.mockResolvedValue(mockUser);

      // Simulando autenticação middleware
      const res = await request(app)
        .get('/api/me')
        .set('Authorization', 'Bearer valid-token'); 

      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockUser);
    });

    it('deve retornar 404 se o usuário não for encontrado', async () => {
      authService.getUserById.mockResolvedValue(null);

      const res = await request(app)
        .get('/api/me')
        .set('Authorization', 'Bearer valid-token');

      expect(res.statusCode).toBe(404);
      expect(res.body.message).toBe('Usuário não encontrado');
    });

    it('deve retornar 500 em caso de erro interno ao buscar o usuário', async () => {
      authService.getUserById.mockRejectedValue(new Error('Erro ao buscar usuário'));

      const res = await request(app)
        .get('/api/me')
        .set('Authorization', 'Bearer valid-token');

      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe('Erro ao buscar dados do usuário');
    });
  });
});
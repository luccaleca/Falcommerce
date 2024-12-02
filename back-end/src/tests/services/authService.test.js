// tests/services/authService.test.js

const jwt = require('jsonwebtoken');
const authService = require('../../services/authService');
const { createUser, findUserByEmail, User } = require('../../models/userModels');

jest.mock('../../models/userModels');
jest.mock('jsonwebtoken');

describe('AuthService', () => {
  describe('register', () => {
    it('deve registrar um novo usuário com sucesso', async () => {
      findUserByEmail.mockResolvedValue(null);
      createUser.mockResolvedValue({ id: 1, nome_usuario: 'Test User', email: 'test@example.com' });

      const result = await authService.register('Test User', 'test@example.com', 'senha123');
      expect(result.user).toBeDefined();
      expect(result.token).toBeDefined();
    });

    it('deve lançar erro se o usuário já existe', async () => {
      findUserByEmail.mockResolvedValue({ id: 1, email: 'test@example.com' });

      await expect(authService.register('Test User', 'test@example.com', 'senha123')).rejects.toThrow('Usuário já existe');
    });
  });

  describe('login', () => {
    it('deve realizar login com sucesso', async () => {
      const mockUser = { id: 1, email: 'test@example.com', senha: 'senha123' };
      findUserByEmail.mockResolvedValue(mockUser);

      const result = await authService.login('test@example.com', 'senha123');
      expect(result.user).toBeDefined();
      expect(result.token).toBeDefined();
    });

    it('deve lançar erro para e-mail não encontrado', async () => {
      findUserByEmail.mockResolvedValue(null);

      await expect(authService.login('notfound@example.com', 'senha123')).rejects.toThrow('Credenciais inválidas');
    });

    it('deve lançar erro para senha inválida', async () => {
      const mockUser = { id: 1, email: 'test@example.com', senha: 'senha123' };
      findUserByEmail.mockResolvedValue(mockUser);

      await expect(authService.login('test@example.com', 'wrongpassword')).rejects.toThrow('Credenciais inválidas');
    });
  });

  describe('generateToken', () => {
    it('deve gerar um token JWT válido', () => {
      jwt.sign.mockReturnValue('valid-token');
      const token = authService.generateToken(1);
      expect(token).toBe('valid-token');
    });
  });

  describe('verifyToken', () => {
    it('deve verificar um token JWT com sucesso', () => {
      const decoded = { id: 1 };
      jwt.verify.mockReturnValue(decoded);
      const result = authService.verifyToken('valid-token');
      expect(result).toEqual(decoded);
    });

    it('deve lançar erro para token inválido', () => {
      jwt.verify.mockImplementation(() => { throw new Error('Token inválido'); });

      expect(() => authService.verifyToken('invalid-token')).toThrow('Token inválido');
    });
  });

  describe('getUserById', () => {
    it('deve retornar usuário por ID', async () => {
      const mockUser = { id: 1, nome_usuario: 'Test User', email: 'test@example.com' };
      User.findByPk.mockResolvedValue(mockUser);

      const user = await authService.getUserById(1);
      expect(user).toEqual(mockUser);
    });

    it('deve lançar erro se o usuário não for encontrado por ID', async () => {
      User.findByPk.mockResolvedValue(null);

      await expect(authService.getUserById(1)).rejects.toThrow('Usuário não encontrado');
    });
  });
});
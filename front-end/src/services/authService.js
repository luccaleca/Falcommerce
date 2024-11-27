// src/services/authService.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/auth',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post('/register', userData); // Chama /auth/register
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao registrar usuário');
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post('/login', credentials);
    return response.data; 
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao fazer login');
  }
};
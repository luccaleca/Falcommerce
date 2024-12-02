// src/services/solicitacaoFuncionalidadeService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const criarSolicitacaoFuncionalidade = async (dados) => {
  const token = localStorage.getItem('token'); 
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await api.post('/solicitacaoFuncionalidade', dados);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro ao conectar com a API');
  }
};
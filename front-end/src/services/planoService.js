// src/services/planoService.js

import axios from 'axios';

// Configure o cliente Axios com a URL base
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/assinatura', // Certifique-se de que esta URL está correta
  headers: {
    'Content-Type': 'application/json'
  }
});

// Função para assinar um plano
export const assinarPlano = async (usuario_id, plano_id, token) => {
  try {
    const response = await apiClient.post(
      '/assinar', // Endpoint esperado para a assinatura
      { usuario_id, plano_id},
      {
        headers: {
          Authorization: `Bearer ${token}` // Inclua o token JWT para autorização, se necessário
        }
      }
    );
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    // Lançar um erro com a mensagem correta
    throw new Error(error.response?.data?.message || 'Erro ao realizar assinatura');
  }
};
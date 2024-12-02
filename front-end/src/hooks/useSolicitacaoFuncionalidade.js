// src/hooks/useSolicitacaoFuncionalidade.js

import { useState } from 'react';
import { criarSolicitacaoFuncionalidade } from '../services/solicitacaoFuncionalidadeService';
import { useAuth } from '../context/AuthContext';

const useSolicitacaoFuncionalidade = (tipoPadrao = 'Híbrida') => {
  const { user } = useAuth(); // Obtém o usuário do contexto
  const [solicitacao, setSolicitacao] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const enviarSolicitacao = async (dadosSolicitacao) => {
    if (!user || !user.id) { // Certifique-se de que o usuário e o id estão disponíveis
      setError('Você deve estar logado para enviar uma solicitação.');
      return;
    }

    console.log('Usuário atual:', user);

    // Adiciona tipo e usuarioId ao objeto de dados
    const solicitacaoData = {
      ...dadosSolicitacao,
      usuarioId: user.id,
      tipo: tipoPadrao
    };

    setLoading(true);
    try {
      const data = await criarSolicitacaoFuncionalidade(solicitacaoData);
      setSolicitacao(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { solicitacao, error, loading, enviarSolicitacao };
};

export default useSolicitacaoFuncionalidade;
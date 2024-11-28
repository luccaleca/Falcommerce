'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { assinarPlano } from '@/services/planoService';

export default function Pagamento() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();

 

  const [numeroCartao, setNumeroCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [nomeCartao, setNomeCartao] = useState('');
  const [errors, setErrors] = useState({});
  const [mensagem, setMensagem] = useState('');

  const planos = {
    'Básico': 1,
    'Intermediário': 2,
    'Avançado': 3,
    'Elite': 4
  };

  const [plano, setPlano] = useState({ nome: '', preco: '' });

  useEffect(() => {
    const nome = searchParams.get('plano');
    const preco = searchParams.get('preco');
    if (nome && preco) {
      setPlano({ nome, preco });
    }
  }, [searchParams]);

  const handleTrocarPlano = () => {
    router.push('/planos');
  };

  const validarFormulario = () => {
    const novosErros = {};
    if (!numeroCartao) novosErros.numeroCartao = 'Informe um número de cartão.';
    if (!validade) novosErros.validade = 'Informe uma data de validade.';
    if (!cvv) novosErros.cvv = 'Informe um CVV.';
    if (!nomeCartao) novosErros.nomeCartao = 'Informe o nome.';

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      const usuarioId = user?.id; // Obtenha o ID do usuário do contexto
      const token = localStorage.getItem('token'); // Obtenha o token JWT do armazenamento local
      const planoId = planos[plano.nome]; // Obtenha o ID do plano baseado no nome

      if (!usuarioId || !token) {
        setMensagem('Usuário não autenticado. Por favor, faça login novamente.');
        return;
      }

      try {
        const resposta = await assinarPlano(usuarioId, planoId, token);
        setMensagem(`Assinatura bem-sucedida: ${resposta.mensagem}`);
        router.push('/assinatura-confirmada');
      } catch (error) {
        setMensagem(`Erro ao assinar: ${error.message}`);
      }
    }
  };


  const formatarNumeroCartao = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').substring(0, 19);
  };

  const formatarValidade = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/, '$1/').substring(0, 5);
  };

  const formatarCvv = (value) => {
    return value.replace(/\D/g, '').substring(0, 3);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6">Informe os dados do seu cartão de crédito ou débito</h2>

      <div className="flex space-x-2 mb-4">
        <img src="/images/icone-pagamento/visa.png" alt="Visa" className="h-6" />
        <img src="/images/icone-pagamento/mastercard.png" alt="Mastercard" className="h-6" />
        <img src="/images/icone-pagamento/amex.png" alt="Amex" className="h-6" />
        <img src="/images/icone-pagamento/elo.png" alt="Elo" className="h-6" />
        <img src="/images/icone-pagamento/hipercard.png" alt="Hipercard" className="h-6" />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Número do cartão"
            value={numeroCartao}
            onChange={(e) => setNumeroCartao(formatarNumeroCartao(e.target.value))}
            className={`w-full border p-2 rounded ${errors.numeroCartao ? 'border-red-500' : ''}`}
          />
          {errors.numeroCartao && <p className="text-red-500 text-sm">{errors.numeroCartao}</p>}
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Data de validade (MM/AA)"
              value={validade}
              onChange={(e) => setValidade(formatarValidade(e.target.value))}
              className={`w-full border p-2 rounded ${errors.validade ? 'border-red-500' : ''}`}
            />
            {errors.validade && <p className="text-red-500 text-sm">{errors.validade}</p>}
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(formatarCvv(e.target.value))}
              className={`w-full border p-2 rounded ${errors.cvv ? 'border-red-500' : ''}`}
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Nome no cartão"
            value={nomeCartao}
            onChange={(e) => setNomeCartao(e.target.value)}
            className={`w-full border p-2 rounded ${errors.nomeCartao ? 'border-red-500' : ''}`}
          />
          {errors.nomeCartao && <p className="text-red-500 text-sm">{errors.nomeCartao}</p>}
        </div>

        <div className="bg-gray-100 p-4 rounded mt-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-lg font-bold">{plano.preco}/mês</p>
            <button type="button" onClick={handleTrocarPlano} className="text-blue-600">
              Trocar
            </button>
          </div>
          <p className="text-sm">{plano.nome}</p>
        </div>

        <p className="text-xs text-gray-600 mt-4">
          Cartões que suportam transações de débito e de crédito poderão ser processados de ambas as formas.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Ao clicar no botão "Iniciar assinatura" abaixo, você concorda com os <Link href="/legal/termos" className="text-blue-600">Termos de Uso</Link> e a <Link href="/legal/privacidade" className="text-blue-600">Declaração de Privacidade</Link>.
        </p>

        <button
          type="submit"
          className="mt-6 w-full bg-[#0D2B47] text-white py-3 rounded-lg hover:bg-[#1a3e5c] transition duration-200"
        >
          Iniciar assinatura
        </button>
      </form>
      {mensagem && <p className="text-center mt-6 text-red-500">{mensagem}</p>}
    </div>
  );
}
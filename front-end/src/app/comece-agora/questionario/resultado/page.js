'use client';

import React from 'react';
import { useQuestionario } from '@/hooks/useQuestionario';
import { FaCheck } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Exemplo de funcionalidades sugeridas
const funcionalidadesExemplo = [
  { id: 1, nome: "Gestão de Orçamento", descricao: "Controle de despesas e receitas", imagem: "/images/gestao-orcamento.jpg" },
  { id: 5, nome: "Gestão de Campanhas", descricao: "Planejamento de campanhas promocionais", imagem: "/images/campanhas.jpg" },
  { id: 10, nome: "Controle de Inventário", descricao: "Monitoramento de níveis de estoque", imagem: "/images/inventario.jpg" },
  { id: 15, nome: "Gestão de Transporte", descricao: "Planejamento de entregas", imagem: "/images/transporte.jpg" },
];

export default function Resultado() {
  const { determinarPorte } = useQuestionario();
  const porteNegocio = determinarPorte();
  const router = useRouter();

  const planos = [
    {
      nome: 'Básico',
      preco: 'R$ 149',
      codigo: 'basico',
      funcionalidades: 'Até 3 funcionalidades padrão',
      hibridas: 'Disponíveis por R$ 500 cada',
      personalizadas: 'Disponíveis por R$ 2.500 cada',
      suporte: 'Chat sempre à disposição',
      contas: 'Até 3 contas permitidas',
      requisicoes: 'Até 10.000 requisições/mês',
      armazenamento: '5 GB de armazenamento de dados',
      descontos: 'Economiza 5% em funcionalidades adicionais',
    },
    {
      nome: 'Intermediário',
      preco: 'R$ 299',
      codigo: 'intermediario',
      funcionalidades: 'Até 6 funcionalidades padrão',
      hibridas: 'Inclui 1 funcionalidade híbrida, adicionais por R$ 450 cada',
      personalizadas: 'Disponíveis por R$ 2.250 cada',
      suporte: 'E-mail com resposta prioritária',
      contas: 'Até 5 contas permitidas',
      requisicoes: 'Até 50.000 requisições/mês',
      armazenamento: '10 GB de armazenamento de dados',
      descontos: 'Economiza 10% em funcionalidades adicionais',
    },
    {
      nome: 'Avançado',
      preco: 'R$ 499',
      codigo: 'avancado',
      funcionalidades: 'Até 9 funcionalidades padrão',
      hibridas: 'Inclui 2 funcionalidades híbridas, adicionais por R$ 400 cada',
      personalizadas: 'Inclui 1 crédito por ano, adicionais por R$ 2.000 cada',
      suporte: 'E-mail e chat',
      contas: 'Até 10 contas permitidas',
      requisicoes: 'Até 100.000 requisições/mês',
      armazenamento: '20 GB de armazenamento de dados',
      descontos: 'Economiza 15% em funcionalidades adicionais',
    },
  ];

  const conteudoPorPorte = {
    Pequeno: planos[0],
    Médio: planos[1],
    Grande: planos[2],
  };

  const planoRecomendado = conteudoPorPorte[porteNegocio];

  const handleEscolherPlano = (codigoPlano) => {
    // Redirecionar para a página de pagamento com o código do plano selecionado
    router.push(`/pagamento?plano=${codigoPlano}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Resultado do Questionário</h1>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
          <h2 className="text-3xl font-bold mb-6">Recomendação para o seu negócio</h2>
          <p className="text-lg mb-6">
            Com base nas suas respostas, recomendamos o plano <strong>{planoRecomendado.nome}</strong>. Este plano é adequado para o porte do seu negócio e oferece as funcionalidades necessárias para o seu crescimento.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Funcionalidades Sugeridas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {funcionalidadesExemplo.map(func => (
              <div key={func.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
                <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-32 object-cover mb-2" />
                <h4 className="text-lg font-semibold">{func.nome}</h4>
                <p className="text-gray-600">{func.descricao}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-300">
          <h2 className="text-3xl font-bold mb-4">{planoRecomendado.nome}</h2>
          <p className="text-3xl font-bold mb-6">{planoRecomendado.preco}/mês</p>
          <ul className="mb-4 space-y-2 text-lg">
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {planoRecomendado.funcionalidades}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> Funcionalidades Híbridas: {planoRecomendado.hibridas}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> Funcionalidades Personalizadas: {planoRecomendado.personalizadas}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> Suporte: {planoRecomendado.suporte}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {planoRecomendado.contas}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {planoRecomendado.requisicoes}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {planoRecomendado.armazenamento}
            </li>
            <li className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {planoRecomendado.descontos}
            </li>
          </ul>
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => handleEscolherPlano(planoRecomendado.codigo)}
              className="bg-[#0D2B47] text-white py-2 px-4 rounded-lg hover:bg-[#1a3e5c] transition duration-200"
            >
              Escolher Plano
            </button>
            <button className="bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
              Ver Outros Planos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
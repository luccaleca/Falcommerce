import { useState } from 'react';

export function useQuestionario() {
  const perguntas = [
    {
      pergunta: "Como você classificaria o tamanho do seu negócio?",
      name: "tamanhoNegocio",
      opcoes: [
        { texto: "Pequeno (Até 5 funcionários ou faturamento anual abaixo de R$ 500.000)", pontos: 1 },
        { texto: "Médio (6 a 50 funcionários ou faturamento entre R$ 500.000 e R$ 5.000.000)", pontos: 2 },
        { texto: "Grande (Mais de 50 funcionários ou faturamento acima de R$ 5.000.000)", pontos: 3 }
      ]
    },
    {
      pergunta: "Quantas vendas seu e-commerce realiza por mês em média?",
      name: "vendasMensais",
      opcoes: [
        { texto: "Até 500 vendas", pontos: 1 },
        { texto: "500 a 5.000 vendas", pontos: 2 },
        { texto: "Mais de 5.000 vendas", pontos: 3 }
      ]
    },
    {
      pergunta: "Qual é o seu gasto mensal com anúncios?",
      name: "gastoAnuncios",
      opcoes: [
        { texto: "Até R$ 2.000", pontos: 1 },
        { texto: "R$ 2.000 a R$ 10.000", pontos: 2 },
        { texto: "Mais de R$ 10.000", pontos: 3 }
      ]
    },
    {
      pergunta: "Qual é sua taxa de conversão atual?",
      name: "taxaConversao",
      opcoes: [
        { texto: "Até 3%", pontos: 1 },
        { texto: "3% a 6%", pontos: 2 },
        { texto: "Mais de 6%", pontos: 3 }
      ]
    },
    {
      pergunta: "Quantas visitas mensais seu site recebe?",
      name: "visitasMensais",
      opcoes: [
        { texto: "Até 20.000 visitas", pontos: 1 },
        { texto: "20.000 a 100.000 visitas", pontos: 2 },
        { texto: "Mais de 100.000 visitas", pontos: 3 }
      ]
    },
    {
      pergunta: "Você tem interesse em funcionalidades personalizadas?",
      name: "interesseFuncionalidades",
      opcoes: [
        { texto: "Sim, meu produto é único e requer soluções personalizadas.", pontos: 2 },
        { texto: "Não, meu produto é mais padrão e as funcionalidades básicas são suficientes.", pontos: 1 }
      ]
    },
    {
      pergunta: "Qual o volume de dados que você espera armazenar?",
      name: "volumeDados",
      opcoes: [
        { texto: "Até 50 GB", pontos: 1 },
        { texto: "50 GB a 200 GB", pontos: 2 },
        { texto: "Mais de 200 GB", pontos: 3 }
      ]
    },
    {
      pergunta: "Você integra ou precisa integrar seu e-commerce com outros sistemas?",
      name: "integracaoSistemas",
      opcoes: [
        { texto: "Sim", pontos: 2 },
        { texto: "Não", pontos: 1 }
      ]
    },
    {
      pergunta: "Qual plataforma de e-commerce você usa atualmente, se houver?",
      name: "plataformaEcommerce",
      opcoes: [
        { texto: "Shopify", pontos: 2 },
        { texto: "WooCommerce", pontos: 2 },
        { texto: "BigCommerce", pontos: 2 },
        { texto: "Wix", pontos: 1 },
        { texto: "Outra / Nenhuma", pontos: 1 }
      ]
    },
    {
      pergunta: "Seu negócio opera exclusivamente online ou também possui lojas físicas?",
      name: "modeloNegocio",
      opcoes: [
        { texto: "Apenas e-commerce", pontos: 1 },
        { texto: "E-commerce e lojas físicas", pontos: 2 }
      ]
    }
  ];

  const [respostas, setRespostas] = useState({});

  const handleChange = (e) => {
    setRespostas({
      ...respostas,
      [e.target.name]: e.target.value,
    });
  };

  const calcularPontuacaoTotal = () => {
    return perguntas.reduce((total, pergunta) => {
      const resposta = respostas[pergunta.name];
      const opcaoSelecionada = pergunta.opcoes.find(opcao => opcao.texto === resposta);
      return total + (opcaoSelecionada ? opcaoSelecionada.pontos : 0);
    }, 0);
  };

  // Função para determinar o porte com base na pontuação total
  const determinarPorte = () => {
    const pontuacao = calcularPontuacaoTotal();
    if (pontuacao <= 15) {
      return "Pequeno";
    } else if (pontuacao <= 21) {
      return "Médio";
    } else {
      return "Grande";
    }
  };

  return {
    perguntas,
    respostas,
    handleChange,
    calcularPontuacaoTotal,
    determinarPorte
  };
}
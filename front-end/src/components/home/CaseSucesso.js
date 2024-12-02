import React from 'react';

const CaseSucesso = () => {
  // Exemplo de casos de sucesso reais com imagens
  const cases = [
    {
      company: "Amazon",
      automation: "Automação de Atendimento ao Cliente com Alexa",
      results: "Melhoria significativa na experiência do cliente através da assistente virtual, suportando consultas e compras por voz.",
      imageUrl: "/images/home/CasosSucesso/amazon_case1.png",
    },
    {
      company: "Netflix",
      automation: "Recomendações Personalizadas Automatizadas",
      results: "Aumento de 80% no envolvimento dos usuários devido às recomendações precisas baseadas em aprendizado de máquina.",
      imageUrl: "/images/home/CasosSucesso/netflix_case2.png",
    },
    {
      company: "PayPal",
      automation: "Detecção de Fraude em Tempo Real",
      results: "Redução de fraudes em transações financeiras, economizando milhões em potenciais perdas com um sofisticado sistema de IA.",
      imageUrl: "/images/home/CasosSucesso/paypal_case3.png",
    },
    {
      company: "Zara",
      automation: "Gestão Automatizada de Estoque",
      results: "Melhoria na eficiência do gerenciamento de estoque, permitindo reposições mais rápidas e otimizando a logística global.",
      imageUrl: "/images/home/CasosSucesso/zara_case3.png",
    },
    {
      company: "American Express",
      automation: "Análise Automatizada de Créditos e Riscos",
      results: "Aumento na precisão e velocidade das decisões de crédito, com redução de riscos e aumento na satisfação do cliente.",
      imageUrl: "/images/home/CasosSucesso/american_express_case4.png",
    },
  ];

  return (
    <section className="my-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Casos de Sucesso</h2>
      <div className="space-y-8">
        {cases.map((caseItem, index) => (
          <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
            <img
              className="w-32 h-32 mr-4 rounded-lg shadow-lg"
              src={caseItem.imageUrl}
              alt={`${caseItem.company} logo`}
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{caseItem.company}</h3>
              <p className="text-lg text-gray-700 mb-1">
                <strong>Automação:</strong> {caseItem.automation}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Resultados:</strong> {caseItem.results}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseSucesso;
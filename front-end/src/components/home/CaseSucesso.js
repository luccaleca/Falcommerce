import React from 'react';

const CaseSucesso = () => {
  // Exemplo de dados de casos de sucesso
  const cases = [
    {
      company: "Tech Innovators Inc.",
      automation: "Automação de Atendimento ao Cliente",
      results: "Redução de 30% no tempo de resposta e aumento de 25% na satisfação do cliente.",
    },
    {
      company: "E-Commerce Giants",
      automation: "Automação de Processamento de Pedidos",
      results: "Processamento 50% mais rápido e redução de erros em 40%.",
    },
    {
      company: "Financial Solutions Corp.",
      automation: "Relatórios Financeiros Automatizados",
      results: "Economia de 20 horas semanais em trabalho manual e precisão aprimorada.",
    },
  ];

  return (
    <section className="my-16 px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Casos de Sucesso</h2>
      <div className="space-y-8">
        {cases.map((caseItem, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">{caseItem.company}</h3>
            <p className="text-lg text-gray-700 mb-1">
              <strong>Automação:</strong> {caseItem.automation}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Resultados:</strong> {caseItem.results}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseSucesso;
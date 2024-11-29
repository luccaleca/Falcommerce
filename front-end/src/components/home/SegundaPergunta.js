// src/components/home/SegundaPergunta.js
import React from 'react';

const SegundaPergunta = () => {
  return (
    <section className="my-16 px-8 max-w-7xl mx-auto">
      <div className="bg-gray-100 text-gray-900 py-8 px-4 rounded-lg shadow-md mb-12 text-center">
        <h2 className="text-3xl font-bold">
          Qual a vantagem para o meu comércio?
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 - Personalização do Negócio */}
        <div className="flex-1 max-w-sm bg-white rounded-lg shadow-lg transition-transform hover:scale-105 p-6">
          <div className="overflow-hidden rounded-t-lg mb-4">
            <img 
              src="/images/cards_resposta_central/card1_personalizacao.png" 
              alt="Personalização" 
              className="h-32 w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Personalização do Negócio</h3>
          <p className="text-gray-700">
            Soluções sob medida que se adaptam às suas necessidades específicas, permitindo customização sem complicações.
          </p>
        </div>

        {/* Card 2 - Simplificação de Processos */}
        <div className="flex-1 max-w-sm bg-white rounded-lg shadow-lg transition-transform hover:scale-105 p-6">
          <div className="overflow-hidden rounded-t-lg mb-4">
            <img 
              src="/images/cards_resposta_central/card2_automacao.png" 
              alt="Simplificar Processos" 
              className="h-32 w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Simplificação de Processos</h3>
          <p className="text-gray-700">
            Reduza a complexidade com uma plataforma que centraliza e automatiza processos críticos, economizando tempo e recursos.
          </p>
        </div>

        {/* Card 3 - Suporte e Acompanhamento Contínuos */}
        <div className="flex-1 max-w-sm bg-white rounded-lg shadow-lg transition-transform hover:scale-105 p-6">
          <div className="overflow-hidden rounded-t-lg mb-4">
            <img 
              src="/images/cards_resposta_central/card3_suporte.png" 
              alt="Suporte" 
              className="h-32 w-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Suporte e Acompanhamento Contínuos</h3>
          <p className="text-gray-700">
            Receba suporte dedicado e acompanhamento contínuo para garantir o sucesso do seu e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SegundaPergunta;
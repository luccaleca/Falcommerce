import React from 'react';

export default function Novidades() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-5xl font-semibold mb-12 text-center font-serif">Novidades da Falcommerce</h1>
      
      {/* Seção de Atualizações de Produto */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 font-serif border-b-2 border-gray-200 pb-3">Atualizações de Produto</h2>
        
        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Nova Funcionalidade: Análise de Dados Avançada</h3>
          <p className="text-lg leading-relaxed">Estamos lançando um novo conjunto de ferramentas de análise de dados que permitirá aos usuários criar relatórios detalhados sobre o desempenho de suas vendas. Isso ajudará a identificar tendências de consumo e ajustar estratégias rapidamente...</p>
        </article>

        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Melhorias de Interface</h3>
          <p className="text-lg leading-relaxed">A interface do usuário foi atualizada para oferecer uma navegação mais intuitiva, com novos ícones e um layout modernizado. Essas mudanças visam melhorar a experiência do usuário e reduzir o tempo de treinamento...</p>
        </article>

        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Correções de Bugs Recentes</h3>
          <p className="text-lg leading-relaxed">Corrigimos diversos bugs relatados por nossos usuários, garantindo uma experiência mais fluida e sem interrupções. Agradecemos o feedback contínuo da nossa comunidade...</p>
        </article>
      </section>

      {/* Seção de Parcerias e Integrações */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 font-serif border-b-2 border-gray-200 pb-3">Parcerias e Integrações</h2>
        
        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Parceria com a ABC Logistics</h3>
          <p className="text-lg leading-relaxed">Estamos empolgados em anunciar nossa parceria com a ABC Logistics, permitindo que nossos usuários otimizem suas operações de envio e reduzam custos. Isso é parte de nossa estratégia para oferecer soluções completas...</p>
        </article>

        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Integração com o Sistema de Pagamentos EasyPay</h3>
          <p className="text-lg leading-relaxed">A nova integração com o EasyPay facilita transações rápidas e seguras, aumentando a eficiência das vendas online. Isso garante que nossos clientes possam oferecer mais opções de pagamento...</p>
        </article>
      </section>

      {/* Seção de Tendências de Setor */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-6 font-serif border-b-2 border-gray-200 pb-3">Tendências do Setor</h2>
        
        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Crescimento do E-commerce Móvel</h3>
          <p className="text-lg leading-relaxed">Com o aumento do uso de dispositivos móveis, o comércio eletrônico está se adaptando a uma experiência amigável para smartphones. A Falcommerce está na vanguarda desta transformação, garantindo que suas soluções sejam compatíveis...</p>
        </article>

        <article className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 font-serif">Integração de IA no E-commerce</h3>
          <p className="text-lg leading-relaxed">A Inteligência Artificial está revolucionando o setor de e-commerce, desde recomendações personalizadas até a automação de processos. Estamos explorando essas tecnologias de ponta para beneficiar nossos usuários...</p>
        </article>
      </section>
    </div>
  );
}
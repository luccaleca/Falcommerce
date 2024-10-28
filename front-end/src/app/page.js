// src/app/home/page.js

export default function Home() {
  return (
      <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center bg-gray-100 py-20">
              <h1 className="text-5xl font-bold mb-4">Impulsione Seu E-commerce com a Falcommerce</h1>
              <p className="text-xl mb-8">Soluções inteligentes para otimizar e automatizar sua operação online.</p>
              <div className="flex justify-center space-x-4">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Saiba Mais</button>
                  <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700">Comece Agora</button>
              </div>
          </section>

          {/* Seção de Benefícios */}
          <section className="py-16">
              <h2 className="text-4xl font-bold text-center mb-8">Por que Escolher a Falcommerce?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Automação Eficiente</h3>
                      <p>Reduza tempo e custos com processos automatizados.</p>
                  </div>
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Integração Simples</h3>
                      <p>Conecte-se facilmente a plataformas como VTEX e Shopify.</p>
                  </div>
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Análises Avançadas</h3>
                      <p>Obtenha insights valiosos para decisões informadas.</p>
                  </div>
              </div>
          </section>

          {/* Funcionalidades Principais */}
          <section className="bg-gray-100 py-16">
              <h2 className="text-4xl font-bold text-center mb-8">Funcionalidades que Fazem a Diferença</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Gestão de Inventário</h3>
                      <p>Controle total do seu estoque.</p>
                  </div>
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Relatórios Personalizados</h3>
                      <p>Relatórios detalhados sob medida para seu negócio.</p>
                  </div>
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Integrações com Múltiplas Plataformas</h3>
                      <p>Conecte-se com as principais plataformas de e-commerce.</p>
                  </div>
                  <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-2">Suporte 24/7</h3>
                      <p>Estamos sempre aqui para ajudar.</p>
                  </div>
              </div>
          </section>

          {/* Depoimentos de Clientes */}
          <section className="py-16">
              <h2 className="text-4xl font-bold text-center mb-8">O Que Nossos Clientes Dizem</h2>
              <div className="flex justify-center">
                  {/* Carousel de Depoimentos */}
                  <div className="w-3/4">
                      {/* Adicione aqui um componente de carousel de depoimentos */}
                      <p className="text-center">"A Falcommerce transformou nossa operação e nos ajudou a crescer!"</p>
                      <p className="text-right mt-4">- Cliente Satisfeito</p>
                  </div>
              </div>
          </section>

          {/* Seção de Integrações */}
          <section className="bg-gray-100 py-16">
              <h2 className="text-4xl font-bold text-center mb-8">Integrações Simples e Poderosas</h2>
              <p className="text-center mb-8">Conecte-se facilmente às principais plataformas como VTEX, Shopify, e muito mais.</p>
          </section>

          {/* Seção de Preços */}
          <section className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-8">Planos Flexíveis para Todos os Negócios</h2>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Ver Planos e Preços</button>
          </section>

          {/* Seção de Recursos e Suporte */}
          <section className="bg-gray-100 py-16">
              <h2 className="text-4xl font-bold text-center mb-8">Recursos e Suporte</h2>
              <p className="text-center mb-8">Apoio dedicado com suporte 24/7 e uma rica base de conhecimento.</p>
          </section>

          {/* Seção de Contato */}
          <section className="py-16">
              <h2 className="text-4xl font-bold text-center mb-8">Entre em Contato</h2>
              <form className="max-w-lg mx-auto">
                  <input type="text" placeholder="Nome" className="w-full mb-4 p-2 border rounded" />
                  <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
                  <textarea placeholder="Mensagem" className="w-full mb-4 p-2 border rounded"></textarea>
                  <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">Enviar</button>
              </form>
              <div className="text-center mt-8">
                  <p>Email: contato@falcommerce.com</p>
                  <p>Telefone: (11) 1234-5678</p>
              </div>
          </section>
      </div>
  );
}
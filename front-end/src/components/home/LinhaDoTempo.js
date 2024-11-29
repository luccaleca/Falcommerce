import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFolderOpen, faClipboard, faCreditCard, faGears } from '@fortawesome/free-solid-svg-icons';

const LinhaDoTempo = () => {
  return (
    <section className="my-16 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Como implementar a Falcommerce no meu negócio?
        </h2>
      </div>
      <div className="flex flex-row justify-between items-center overflow-x-auto space-x-4">
        {/* Passo 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 transition-transform duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#0B2742' }} size="lg" />
          </div>
          <h3 className="text-xl font-semibold mb-2">1. Identificação dos Problemas</h3>
          <p className="text-gray-700">
            Identifique as áreas do seu e-commerce que requerem atenção e melhorias.            
          </p>
        </div>

        {/* Seta */}
        <div className="text-3xl" style={{ color: '#0B2742' }}>→</div>

        {/* Passo 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 transition-transform duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faFolderOpen} style={{ color: '#0B2742' }} size="lg" />
          </div>
          <h3 className="text-xl font-semibold mb-2">2. Exploração das Funcionalidades</h3>
          <p className="text-gray-700">
          Navegue pelo nosso catálogo e descubra soluções sob medida para suas necessidades.
          </p>
        </div>

        {/* Seta */}
        <div className="text-3xl" style={{ color: '#0B2742' }}>→</div>

        {/* Passo 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 transition-transform duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faClipboard} style={{ color: '#0B2742' }} size="lg" />
          </div>
          <h3 className="text-xl font-semibold mb-2">3. Escolha do Plano</h3>
          <p className="text-gray-700">
          Selecione o plano ideal que oferece o melhor custo-benefício para suas soluções desejadas.
          </p>
        </div>

        {/* Seta */}
        <div className="text-3xl" style={{ color: '#0B2742' }}>→</div>

        {/* Passo 4 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 transition-transform duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faCreditCard} style={{ color: '#0B2742' }} size="lg" />
          </div>
          <h3 className="text-xl font-semibold mb-2">4. Pagamento</h3>
          <p className="text-gray-700">
          Realize um pagamento rápido e seguro para ativar seu plano.
          </p>
        </div>

        {/* Seta */}
        <div className="text-3xl" style={{ color: '#0B2742' }}>→</div>

        {/* Passo 5 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 transition-transform duration-300 transform hover:scale-110">
            <FontAwesomeIcon icon={faGears} style={{ color: '#0B2742' }} size="lg" />
          </div>
          <h3 className="text-xl font-semibold mb-2">5. Implementação das Features</h3>
          <p className="text-gray-700">
          Acesse seu portal e integre as funcionalidades escolhidas para otimizar seu e-commerce.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LinhaDoTempo;
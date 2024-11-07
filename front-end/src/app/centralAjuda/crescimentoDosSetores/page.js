// src/app/crescimento/page.js
"use client";

import { useState } from 'react';

export default function CrescimentoDosSetores() {
    const [mode, setMode] = useState('ecommerce');

    return (
        <div className="flex container mx-auto px-4 py-8">
            
            {/* Barra Lateral Esquerda */}
            <aside className="w-1/6 bg-white p-4 rounded shadow mr-4">
                <h2 className="text-xl font-bold mb-4">Recursos Úteis</h2>
                <ul className="list-disc pl-4">
                    <li><a href="#">Dicas de SEO</a></li>
                    <li><a href="#">Guia de Logística</a></li>
                </ul>
                <div className="mt-6">
                    <h3 className="font-semibold">Contato Rápido</h3>
                    <p>Fale conosco a qualquer momento para assistência personalizada.</p>
                    <a href="/contato" className="text-blue-500 hover:underline">Entre em Contato</a>
                </div>
            </aside>

            {/* Conteúdo Principal */}
            <div className="w-4/6">
                <h1 className="text-4xl font-bold mb-8 text-center">Estratégias de Crescimento por Setores</h1>
                
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-4 py-2 mx-2 rounded ${mode === 'ecommerce' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setMode('ecommerce')}
                    >
                        Somente E-commerce
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 rounded ${mode === 'hybrid' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setMode('hybrid')}
                    >
                        E-commerce e Físico
                    </button>
                </div>

                {mode === 'ecommerce' && (
                    <section className="text-center">
                        <h2 className="text-3xl font-bold mb-8">Somente E-commerce</h2>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Aquisição de Produtos e Gestão de Inventário</h3>
                            <p>Para que a aquisição de produtos e a gestão de inventário sejam eficazes, é essencial desenvolver relações confiáveis com fornecedores e adotar tecnologias de gestão que permitam o monitoramento em tempo real do estoque. Isso garante a otimização do inventário e a redução de custos, ao mesmo tempo em que atende à demanda de forma ágil e sem interrupções.</p>
                        </div>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Plataforma de E-commerce</h3>
                            <p>Uma plataforma de e-commerce eficiente deve oferecer uma experiência de usuário intuitiva e ser capaz de escalar com o crescimento do negócio. A segurança e a confiabilidade são fundamentais, assim como a capacidade de integrar-se facilmente com outros canais de vendas para maximizar a presença de mercado.</p>
                        </div>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Marketing Digital</h3>
                            <p>O marketing digital eficaz envolve uma combinação estratégica de SEO, conteúdo de valor e presença ativa em redes sociais. Estas ferramentas são essenciais para aumentar a visibilidade online e fortalecer a relação com o cliente, garantindo que as campanhas sejam direcionadas e eficazes em converter leads em vendas.</p>
                        </div>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Logística e Cumprimento de Pedidos</h3>
                            <p>A logística eficaz se baseia na automação de processos e na colaboração com múltiplos parceiros logísticos para garantir entregas pontuais e precisas. O rastreamento em tempo real dos pedidos melhora a experiência do cliente e solidifica a confiança na empresa, sendo um diferencial competitivo importante.</p>
                        </div>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Atendimento ao Cliente</h3>
                            <p>Um atendimento ao cliente de excelência é caracterizado pela disponibilidade multicanal e pela capacidade de resolver problemas de forma rápida e eficaz. O uso de feedback constante para implementação de melhorias contínuas demonstra o compromisso da empresa em atender e superar as expectativas dos clientes.</p>
                        </div>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Gestão Financeira</h3>
                            <p>A gestão financeira eficiente envolve o controle rigoroso do fluxo de caixa e um planejamento orçamentário cuidadoso. Utilizar KPIs para acompanhamento da saúde financeira e estratégias de mitigação de risco são fundamentais para garantir a sustentabilidade e o crescimento do negócio.</p>
                        </div>

                        <div className="mb-12 max-w-prose mx-auto text-left">
                            <h3 className="text-2xl font-semibold mb-4">Conformidade Legal e Regulatória</h3>
                            <p>Garantir conformidade legal e regulatória é essencial para proteger a reputação da empresa e evitar penalidades. Isso envolve a adoção de práticas rigorosas de proteção de dados e a realização de auditorias regulares para garantir que todas as operações estejam alinhadas com as normas vigentes.</p>
                        </div>
                    </section>
                )}

                {mode === 'hybrid' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-4">E-commerce e Físico</h2>
                        <p>Integre suas operações físicas e online de forma eficaz para um serviço ao cliente mais coeso e uma gestão de inventário unificada.</p>
                    </section>
                )}
            </div>

            {/* Barra Lateral Direita */}
            <aside className="w-1/6 bg-white p-4 rounded shadow ml-4">
                <div className="bg-green-100 p-4 rounded shadow">
                    <h3 className="font-semibold">Iniciar Avaliação Gratuita</h3>
                    <p className="mb-4">Experimente nossa plataforma agora.</p>
                    <a href="#" className="bg-blue-500 text-white py-2 px-6 rounded block text-center">Comece Agora</a>
                </div>
                <div className="mt-6">
                    <h3 className="font-semibold">Ferramentas de Marketing</h3>
                    <p>Explore as melhores ferramentas para otimizar suas campanhas.</p>
                    <a href="#" className="text-blue-500 hover:underline">Saiba Mais</a>
                </div>
                <div className="mt-6">
                    <h3 className="font-semibold">Novidades</h3>
                    <p>Fique por dentro das últimas atualizações e recursos da nossa plataforma.</p>
                    <a href="#" className="text-blue-500 hover:underline">Saiba Mais</a>
                </div>
            </aside>
        </div>
    );
}
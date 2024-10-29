// src/app/centralAjuda/guiaDeInicio/page.js
"use client";

export default function GuiaDeInicio() {
    const steps = [
        {
            titulo: 'Introdução ao Falcommerce',
            descricao: 'Descubra como a Falcommerce pode transformar seu negócio com funcionalidades específicas para e-commerce.'
        },
        {
            titulo: 'Escolha do Plano',
            descricao: 'Entenda os planos disponíveis e escolha aquele que melhor se adapta às suas necessidades de funcionalidades.'
        },
        {
            titulo: 'Explorando o Catálogo de Funcionalidades',
            descricao: 'Navegue pelo catálogo para conhecer cada funcionalidade e descubra como elas podem beneficiar seu negócio.'
        },
        {
            titulo: 'Configuração do Portal do Cliente',
            descricao: 'Acesse e configure seu portal para gerenciar suas funcionalidades e visualizar suas integrações.'
        },
        {
            titulo: 'Integração de Funcionalidades',
            descricao: 'Aprenda a integrar funcionalidades padrão e como solicitar funcionalidades personalizadas.'
        },
        {
            titulo: 'Atualizações e Personalizações',
            descricao: 'Saiba como atualizar seu plano ou adicionar funcionalidades personalizadas ao seu sistema.'
        },
        {
            titulo: 'Suporte e Recursos Adicionais',
            descricao: 'Encontre suporte técnico e recursos adicionais para otimizar o uso das funcionalidades.'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Guia de Início</h1>
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <h2 className="text-2xl font-semibold mb-2">{step.titulo}</h2>
                        <p>{step.descricao}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
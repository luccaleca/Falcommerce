// src/app/comece-agora/page.js

import Link from 'next/link';

export default function ComeceAgora() {
    return (
        <div className="container mx-auto px-4 py-8" style={{ minHeight: '80vh' }}>
            <h1 className="text-3xl font-bold mb-6 text-center">Descubra o Plano Ideal para Você</h1>
            <p className="text-xl mb-8 text-center">
                Queremos ajudar você a encontrar o plano ideal para o seu negócio. Siga nosso questionário para uma recomendação personalizada, vá direto para a lista de planos ou solicite um acompanhamento guiado com um de nossos atendentes.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Precisando de uma recomendação?</h2>
                        <p className="mb-4">
                            Responda a algumas perguntas sobre o seu negócio e nós ajudaremos a escolher o melhor plano para você.
                        </p>
                    </div>
                    <Link href="/comece-agora/questionario" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 inline-block mt-4">
                        Fazer Questionário
                    </Link>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Já sabe o que precisa?</h2>
                        <p className="mb-4">
                            Explore nossos planos e escolha aquele que melhor atende suas necessidades.
                        </p>
                    </div>
                    <Link href="/planos" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 inline-block mt-4">
                        Ver Planos
                    </Link>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex-1 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Pedido Acompanhado</h2>
                        <p className="mb-4">
                            Realize sua compra junto com um de nossos atendentes para garantir que o plano escolhido atenderá todas as suas necessidades.
                        </p>
                    </div>
                    <Link href="/comece-agora/assistido" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition duration-200 inline-block mt-4">
                        Solicitar Acompanhamento
                    </Link>
                </div>
            </div>
        </div>
    );
}
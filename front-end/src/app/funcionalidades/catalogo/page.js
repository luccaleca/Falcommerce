// src/app/catalogo/page.js
"use client";

import Link from "next/link";

export default function CatalogoFuncionalidades() {
    const funcionalidades = [
        // Financeiro
        { id: 1, nome: "Gestão de Orçamento", tipo: "Padrão", descricao: "Controle de despesas e receitas", departamento: "Financeiro", categoria: "Mais Recentes", imagem: "/images/gestao-orcamento.jpg" },
        { id: 2, nome: "Faturamento e Cobrança", tipo: "Padrão", descricao: "Processamento de pagamentos", departamento: "Financeiro", categoria: "Mais Usadas", imagem: "/images/faturamento.jpg" },
        { id: 3, nome: "Relatórios Financeiros", tipo: "Padrão", descricao: "Análise de fluxo de caixa", departamento: "Financeiro", categoria: "Mais Compradas", imagem: "/images/relatorios-financeiros.jpg" },
        { id: 4, nome: "Gestão de Impostos", tipo: "Padrão", descricao: "Cálculo e declaração de impostos", departamento: "Financeiro", categoria: "Mais Recentes", imagem: "/images/gestao-impostos.jpg" },

        // Marketing
        { id: 5, nome: "Gestão de Campanhas", tipo: "Híbrida", descricao: "Planejamento de campanhas promocionais", departamento: "Marketing", categoria: "Mais Usadas", imagem: "/images/campanhas.jpg" },
        { id: 6, nome: "SEO e SEM", tipo: "Híbrida", descricao: "Otimização para motores de busca", departamento: "Marketing", categoria: "Mais Compradas", imagem: "/images/seo-sem.jpg" },
        { id: 7, nome: "Email Marketing", tipo: "Híbrida", descricao: "Envio de newsletters e promoções", departamento: "Marketing", categoria: "Mais Recentes", imagem: "/images/email-marketing.jpg" },
        { id: 8, nome: "Gestão de Redes Sociais", tipo: "Híbrida", descricao: "Planejamento de conteúdo", departamento: "Marketing", categoria: "Mais Usadas", imagem: "/images/redes-sociais.jpg" },

        // Estoque
        { id: 10, nome: "Controle de Inventário", tipo: "Padrão", descricao: "Monitoramento de níveis de estoque", departamento: "Estoque", categoria: "Destaque", imagem: "/images/inventario.jpg" },

        // Logística
        { id: 15, nome: "Gestão de Transporte", tipo: "Padrão", descricao: "Planejamento de entregas", departamento: "Logística", categoria: "Destaque", imagem: "/images/transporte.jpg" },

        // Vendas
        { id: 20, nome: "Gestão de Leads", tipo: "Padrão", descricao: "Captura e nutrição de clientes potenciais", departamento: "Vendas", categoria: "Destaque", imagem: "/images/leads.jpg" },

        // Promoção 2 por 1
        { id: 21, nome: "Gestão de Fornecedores", tipo: "Padrão", descricao: "Coordenação com fornecedores", departamento: "Estoque", categoria: "Promoção 2 por 1", imagem: "/images/fornecedores.jpg" },
        { id: 22, nome: "Análise de Demanda", tipo: "Padrão", descricao: "Previsão de demanda", departamento: "Estoque", categoria: "Promoção 2 por 1", imagem: "/images/demanda.jpg" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Catálogo de Funcionalidades</h1>

            {/* Parte Superior Dividida em Três Colunas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Coluna para Funcionalidades Mais Recentes */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Mais Recentes</h2>
                    <div className="space-y-6">
                        {funcionalidades.filter(func => func.categoria === "Mais Recentes").map((func, idx) => (
                            <div key={idx} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                                <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-24 object-cover mb-2" />
                                <h3 className="text-lg font-semibold mb-1">{func.nome}</h3>
                                <p className="text-sm text-gray-500 mb-1">{`${func.tipo} - ${func.departamento}`}</p>
                                <Link href={`/funcionalidades/${func.id}`}>
                                    <span className="text-blue-600 hover:underline">Saiba mais</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coluna para Funcionalidades Promoção 2 por 1 */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Promoção 2 por 1</h2>
                    <div className="space-y-6">
                        {funcionalidades.filter(func => func.categoria === "Promoção 2 por 1").map((func, idx) => (
                            <div key={idx} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                                <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-24 object-cover mb-2" />
                                <h3 className="text-lg font-semibold mb-1">{func.nome}</h3>
                                <p className="text-sm text-gray-500 mb-1">{`${func.tipo} - ${func.departamento}`}</p>
                                <Link href={`/funcionalidades/${func.id}`}>
                                    <span className="text-blue-600 hover:underline">Saiba mais</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Coluna para Funcionalidades em Destaque */}
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Funcionalidades em Destaque</h2>
                    <div className="space-y-6">
                        {funcionalidades.filter(func => func.categoria === "Destaque").map((func, idx) => (
                            <div key={idx} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                                <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-24 object-cover mb-2" />
                                <h3 className="text-lg font-semibold mb-1">{func.nome}</h3>
                                <p className="text-sm text-gray-500 mb-1">{`${func.tipo} - ${func.departamento}`}</p>
                                <Link href={`/funcionalidades/${func.id}`}>
                                    <span className="text-blue-600 hover:underline">Saiba mais</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Funcionalidades Mais Usadas */}
            <div id="mais-usadas">
                <h2 className="text-3xl font-semibold mb-4">Mais Usadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {funcionalidades.filter(func => func.categoria === "Mais Usadas").map((func, idx) => (
                        <div key={idx} className="border border-gray-300 rounded-lg shadow-md p-6 hover:bg-gray-100 transition duration-200">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{func.nome}</h3>
                            <p className="text-sm text-gray-500 mb-2">{`${func.tipo} - ${func.departamento}`}</p>
                            <p className="mb-4">{func.descricao}</p>
                            <Link href={`/funcionalidades/${func.id}`}>
                                <span className="text-blue-600 hover:underline">Saiba mais</span>
                                </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
"use client";

import Link from "next/link";

export default function CatalogoFuncionalidades() {
    const funcionalidades = [
        // Financeiro
        { id: 1, nome: "Gestão de Orçamento", tipo: "Padrão", descricao: "Controle de despesas e receitas", departamento: "Financeiro", categoria: "Mais Recentes", imagem: "/images/funcionalidades/padrao/financeiro/gestao_de_orcamento.png" },
        { id: 2, nome: "Faturamento e Cobrança", tipo: "Padrão", descricao: "Processamento de pagamentos", departamento: "Financeiro", categoria: "Mais Usadas", imagem: "/images/funcionalidades/padrao/financeiro/faturamento_e_cobranca.png" },
        { id: 3, nome: "Relatórios Financeiros", tipo: "Padrão", descricao: "Análise de fluxo de caixa", departamento: "Financeiro", categoria: "Mais Compradas", imagem: "/images/funcionalidades/padrao/financeiro/relatorios_financeiros.png" },
        { id: 4, nome: "Gestão de Impostos", tipo: "Padrão", descricao: "Cálculo e declaração de impostos", departamento: "Financeiro", categoria: "Mais Recentes", imagem: "/images/funcionalidades/padrao/financeiro/gestao_de_impostos.png" },

        // Marketing
        { id: 5, nome: "Gestão de Campanhas", tipo: "Híbrida", descricao: "Planejamento de campanhas promocionais", departamento: "Marketing", categoria: "Mais Usadas", imagem: "/images/funcionalidades/padrao/marketing/gestao_de_campanha.png" },
        { id: 6, nome: "SEO e SEM", tipo: "Híbrida", descricao: "Otimização para motores de busca", departamento: "Marketing", categoria: "Mais Compradas", imagem: "/images/funcionalidades/padrao/marketing/seo_sem.png" },
        { id: 7, nome: "Email Marketing", tipo: "Híbrida", descricao: "Envio de newsletters e promoções", departamento: "Marketing", categoria: "Mais Recentes", imagem: "/images/funcionalidades/padrao/marketing/email_marketing.png" },
        { id: 8, nome: "Gestão de Redes Sociais", tipo: "Híbrida", descricao: "Planejamento de conteúdo", departamento: "Marketing", categoria: "Mais Usadas", imagem: "/images/funcionalidades/padrao/marketing/gestao_de_redes_sociais.png" },

        // Estoque
        { id: 10, nome: "Controle de Inventário", tipo: "Padrão", descricao: "Monitoramento de níveis de estoque", departamento: "Estoque", categoria: "Destaque", imagem: "/images/funcionalidades/padrao/estoque/controle_de_inventario.png" },
        { id: 11, nome: "Gestão de Fornecedores", tipo: "Padrão", descricao: "Coordenação com fornecedores", departamento: "Estoque", categoria: "Promoção 2 por 1", imagem: "/images/funcionalidades/padrao/estoque/gestao_de_fornecedores.png" },
        { id: 12, nome: "Análise de Demanda", tipo: "Padrão", descricao: "Previsão de demanda", departamento: "Estoque", categoria: "Promoção 2 por 1", imagem: "/images/funcionalidades/padrao/estoque/analise_de_demanda.png" },
        
        // Logística
        { id: 15, nome: "Gestão de Transporte", tipo: "Padrão", descricao: "Planejamento de entregas", departamento: "Logística", categoria: "Destaque", imagem: "/images/funcionalidades/padrao/logistica/gestao_de_transporte.png" },

        // Vendas
        { id: 20, nome: "Gestão de Leads", tipo: "Padrão", descricao: "Captura e nutrição de clientes potenciais", departamento: "Vendas", categoria: "Destaque", imagem: "/images/funcionalidades/padrao/vendas/gestao_de_leads.png" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Catálogo de Funcionalidades</h1>

            {/* Seção Mais Recentes */}
            <section className="mb-12 border-t border-b py-4">
                <h2 className="text-3xl font-semibold mb-6 text-center">Mais Recentes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {funcionalidades.filter(func => func.categoria === "Mais Recentes").map((func) => (
                        <div key={func.id} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover mb-2" />
                            <h3 className="text-lg font-semibold mb-1">{func.nome}</h3>
                            <p className="text-sm text-gray-500 mb-1">{`${func.tipo} - ${func.departamento}`}</p>
                            <p className="text-gray-700">{func.descricao}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção Promoção 2 por 1 */}
            <section className="mb-12 border-b py-4">
                <h2 className="text-3xl font-semibold mb-6 text-center">Promoção 2 por 1</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {funcionalidades.filter(func => func.categoria === "Promoção 2 por 1").map((func) => (
                        <div key={func.id} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover mb-2" />
                            <h3 className="text-lg font-semibold mb-1">{func.nome}</h3>
                            <p className="text-sm text-gray-500 mb-1">{`${func.tipo} - ${func.departamento}`}</p>
                            <p className="text-gray-700">{func.descricao}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção Funcionalidades em Destaque */}
            <section className="mb-12 border-b py-4">
                <h2 className="text-3xl font-semibold mb-6 text-center">Funcionalidades em Destaque</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {funcionalidades.filter(func => func.categoria === "Destaque").map((func) => (
                        <div key={func.id} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover mb-2" />
                            <h3 className="text-lg font-semibold mb-1">{func.nome}</h3>
                            <p className="text-sm text-gray-500 mb-1">{`${func.tipo} - ${func.departamento}`}</p>
                            <p className="text-gray-700">{func.descricao}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Seção Mais Usadas */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-center">Mais Usadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {funcionalidades.filter(func => func.categoria === "Mais Usadas").map((func) => (
                        <div key={func.id} className="border border-gray-300 rounded-lg shadow-md p-6 hover:bg-gray-100 transition duration-200">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{func.nome}</h3>
                            <p className="text-sm text-gray-500 mb-2">{`${func.tipo} - ${func.departamento}`}</p>
                            <p className="text-gray-700">{func.descricao}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
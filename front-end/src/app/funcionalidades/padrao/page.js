"use client";

import { useState } from "react";
import Link from "next/link";

export default function FuncionalidadesPadrao() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");

    const funcionalidades = [
        // Financeiro
        { id: 1, nome: "Gestão de Orçamento", departamento: "Financeiro", descricao: "Controle de despesas e receitas", imagem: "/images/gestao-orcamento.jpg" },
        { id: 2, nome: "Faturamento e Cobrança", departamento: "Financeiro", descricao: "Processamento de pagamentos", imagem: "/images/faturamento.jpg" },
        { id: 3, nome: "Relatórios Financeiros", departamento: "Financeiro", descricao: "Análise de fluxo de caixa", imagem: "/images/relatorios-financeiros.jpg" },
        { id: 4, nome: "Gestão de Impostos", departamento: "Financeiro", descricao: "Cálculo e declaração de impostos", imagem: "/images/gestao-impostos.jpg" },

        // Marketing
        { id: 5, nome: "Gestão de Campanhas", departamento: "Marketing", descricao: "Planejamento de campanhas promocionais", imagem: "/images/campanhas.jpg" },
        { id: 6, nome: "SEO e SEM", departamento: "Marketing", descricao: "Otimização para motores de busca", imagem: "/images/seo-sem.jpg" },
        { id: 7, nome: "Email Marketing", departamento: "Marketing", descricao: "Envio de newsletters e promoções", imagem: "/images/email-marketing.jpg" },
        { id: 8, nome: "Gestão de Redes Sociais", departamento: "Marketing", descricao: "Planejamento de conteúdo", imagem: "/images/redes-sociais.jpg" },
        { id: 9, nome: "Análise de Dados de Marketing", departamento: "Marketing", descricao: "Centralização de dados de marketing", imagem: "/images/analise-marketing.jpg" },

        // Estoque
        { id: 10, nome: "Controle de Inventário", departamento: "Estoque", descricao: "Monitoramento de níveis de estoque", imagem: "/images/inventario.jpg" },
        { id: 11, nome: "Gestão de Fornecedores", departamento: "Estoque", descricao: "Coordenação com fornecedores", imagem: "/images/fornecedores.jpg" },
        { id: 12, nome: "Análise de Demanda", departamento: "Estoque", descricao: "Previsão de demanda", imagem: "/images/demanda.jpg" },
        { id: 13, nome: "Gestão de Armazém", departamento: "Estoque", descricao: "Otimização de armazenamento", imagem: "/images/armazem.jpg" },
       
        // Logística
        { id: 15, nome: "Gestão de Transporte", departamento: "Logística", descricao: "Planejamento de entregas", imagem: "/images/transporte.jpg" },
        { id: 16, nome: "Rastreamento de Encomendas", departamento: "Logística", descricao: "Monitoramento de pedidos", imagem: "/images/rastreamento.jpg" },
        { id: 17, nome: "Otimização de Rotas", departamento: "Logística", descricao: "Planejamento de rotas eficientes", imagem: "/images/rotas.jpg" },
        { id: 18, nome: "Gestão de Devoluções", departamento: "Logística", descricao: "Processamento de devoluções", imagem: "/images/devolucoes.jpg" },
        { id: 19, nome: "Integração com Sistemas de Armazém", departamento: "Logística", descricao: "Sincronização de dados", imagem: "/images/integracao-armazem.jpg" },

        // Vendas
        { id: 20, nome: "Gestão de Leads", departamento: "Vendas", descricao: "Captura e nutrição de clientes potenciais", imagem: "/images/leads.jpg" },
        { id: 21, nome: "CRM", departamento: "Vendas", descricao: "Gerenciamento de relacionamento com clientes", imagem: "/images/crm.jpg" },
        { id: 22, nome: "Análise de Vendas", departamento: "Vendas", descricao: "Relatórios de desempenho de vendas", imagem: "/images/analise-vendas.jpg" },
        { id: 23, nome: "Gestão de Promoções", departamento: "Vendas", descricao: "Configuração de promoções e descontos", imagem: "/images/promocoes.jpg" },
        { id: 24, nome: "Integração com Plataformas de E-commerce", departamento: "Vendas", descricao: "Sincronização de dados de vendas", imagem: "/images/integracao-ecommerce.jpg" },
    ];

    const departamentos = [...new Set(funcionalidades.map(f => f.departamento))];

    const filteredFuncionalidades = funcionalidades.filter(func =>
        (func.nome.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "") &&
        (func.departamento === selectedDepartment || selectedDepartment === "")
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Funcionalidades Padrão</h1>
            <p className="mb-8">Explore as funcionalidades organizadas por departamento para atender às necessidades do seu e-commerce.</p>

            {/* Barra de Busca */}
            <input
                type="text"
                placeholder="Buscar funcionalidades..."
                className="w-full p-2 mb-4 border rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Filtros por Departamento */}
            <div className="flex flex-wrap mb-8">
                {departamentos.map((dept, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 rounded mr-2 mb-2 ${selectedDepartment === dept ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                        onClick={() => setSelectedDepartment(dept)}
                    >
                        {dept}
                    </button>
                ))}
                <button
                    className={`py-2 px-4 rounded ${selectedDepartment === "" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                    onClick={() => setSelectedDepartment("")}
                >
                    Todos
                </button>
            </div>

            {/* Cards de Funcionalidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredFuncionalidades.map(func => (
                    <Link href={`/funcionalidades/padrao/${func.id}`} key={func.id}>
                        <div className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-1">{func.nome}</h3>
                                <p className="text-gray-500 text-sm mb-2">{func.departamento}</p>
                                <p className="text-gray-600">{func.descricao}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
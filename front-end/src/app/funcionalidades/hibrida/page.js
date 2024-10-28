"use client";

import { useState } from "react";

export default function FuncionalidadesHibridas() {
    const [formData, setFormData] = useState({
        departamento: "",
        tipoFuncionalidade: "",
        descricao: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário, utilizando o ID do usuário logado
        console.log(formData);
    };

    const funcionalidades = [
        { id: 1, nome: "Sistema de Gestão de Documentos", descricao: "Organize e gerencie documentos empresariais com controle de acesso.", imagem: "/images/gestao-documentos.jpg" },
        { id: 2, nome: "Análise de Navegação", descricao: "Monitore o comportamento dos usuários e otimize a experiência do cliente.", imagem: "/images/analise-navegacao.jpg" },
        { id: 3, nome: "Gestão de Recursos Humanos", descricao: "Gerencie dados de funcionários e integre com sistemas de folha de pagamento.", imagem: "/images/gestao-rh.jpg" },
        { id: 4, nome: "Sistema de Controle de Qualidade", descricao: "Monitore a qualidade dos produtos com relatórios de não conformidade.", imagem: "/images/controle-qualidade.jpg" },
        { id: 5, nome: "Dashboard", descricao: "Visualize métricas e KPIs em um painel personalizado.", imagem: "/images/dashboard.jpg" },
        { id: 6, nome: "Landing Page", descricao: "Crie páginas de destino personalizadas para suas campanhas.", imagem: "/images/landing-page.jpg" },
        { id: 7, nome: "Site", descricao: "Desenvolva um site adaptado às suas necessidades comerciais.", imagem: "/images/site.jpg" },
        { id: 8, nome: "Relatório de Análise de Cliente", descricao: "Obtenha insights detalhados sobre o comportamento dos clientes.", imagem: "/images/analise-cliente.jpg" },
        { id: 9, nome: "Ferramenta de Análise de Preço", descricao: "Analise preços de mercado e ajuste sua estratégia de precificação.", imagem: "/images/analise-preco.jpg" },
        { id: 10, nome: "CRM", descricao: "Gerencie relacionamentos com clientes e melhore o atendimento.", imagem: "/images/crm.jpg" },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Funcionalidades Híbridas</h1>

            {/* Introdução Explicativa */}
            <section className="mb-8">
                <p>
                    As funcionalidades híbridas da Falcommerce combinam soluções padrão com a flexibilidade de personalizações específicas para atender às necessidades únicas do seu negócio.
                </p>
            </section>

            {/* Funcionalidades Disponíveis */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Funcionalidades Disponíveis</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {funcionalidades.map(func => (
                        <div key={func.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                            <img src={func.imagem} alt={func.nome} className="rounded-t-lg w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-1">{func.nome}</h3>
                                <p className="text-gray-600">{func.descricao}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Formulário de Solicitação */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Solicite Sua Personalização</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Departamento</label>
                        <select
                            name="departamento"
                            value={formData.departamento}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Selecione um departamento</option>
                            {["CEO", "Financeiro", "Marketing", "Logística", "Estoque", "Vendas"].map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Tipo de Funcionalidade</label>
                        <select
                            name="tipoFuncionalidade"
                            value={formData.tipoFuncionalidade}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Selecione o tipo de funcionalidade</option>
                            {["Dashboard", "Landing Page", "Site", "Relatório", "CRM", "Análise de Preço"].map((tipo, index) => (
                                <option key={index} value={tipo}>{tipo}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descreva suas necessidades</label>
                        <textarea
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="4"
                            placeholder="Descreva os detalhes específicos que você deseja para sua funcionalidade híbrida."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Enviar Solicitação
                    </button>
                </form>
            </section>
        </div>
    );
}
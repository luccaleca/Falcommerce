"use client";

import { useState } from "react";

export default function FuncionalidadesPersonalizadas() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        departamento: "",
        descricao: ""
    });

    const departamentos = [
        "CEO",
        "Financeiro",
        "Marketing",
        "Logística",
        "Estoque",
        "Vendas"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        console.log(formData);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Funcionalidades Personalizadas</h1>

            {/* Introdução Explicativa */}
            <section className="mb-8">
                <p>
                    As funcionalidades personalizadas da Falcommerce são soluções sob medida para atender às necessidades específicas do seu negócio.
                    Trabalhamos com você para entender seus desafios e desenvolver funcionalidades que otimizem suas operações.
                </p>
            </section>

            {/* Exemplo Prático */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Exemplo Prático</h2>
                <p>
                    Imagine uma loja online que enfrenta dificuldades em gerenciar promoções sazonais. Com uma funcionalidade personalizada, desenvolvemos
                    um sistema automatizado que ajusta preços e destaca produtos em promoção, resultando em um aumento de 20% nas vendas durante o período.
                </p>
            </section>

            {/* Linha de Progresso */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>Preenchimento do Formulário:</strong> Descreva seu problema e suas necessidades.</li>
                    <li><strong>Análise da Solicitação:</strong> Nossa equipe revisará sua solicitação e entrará em contato.</li>
                    <li><strong>Desenvolvimento:</strong> Criamos a funcionalidade sob medida para o seu negócio.</li>
                    <li><strong>Entrega e Implementação:</strong> Entregamos a solução e auxiliamos na implementação.</li>
                </ol>
            </section>

            {/* Formulário de Solicitação */}
            <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Solicite Sua Funcionalidade Personalizada</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
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
                            {departamentos.map((dept, index) => (
                                <option key={index} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descrição do Problema</label>
                        <textarea
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="4"
                            placeholder="Descreva o problema que você está enfrentando e como uma funcionalidade personalizada pode ajudar."
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
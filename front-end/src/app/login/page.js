"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
    // Estados locais para os dados do formulário
    const [formData, setFormData] = useState({
        email: '',
        senha: '',
    });

    // Função para lidar com mudanças no formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Função de submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui, você pode chamar uma função para lidar com o login
        console.log('Formulário de login submetido:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={formData.senha}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Entrar
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Não tem uma conta?{' '}
                    <Link href="/cadastrar" className="text-blue-600 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </div>
        </div>
    );
}
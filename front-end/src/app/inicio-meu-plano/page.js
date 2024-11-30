"use client";

import { useRouter } from 'next/navigation';
import '../inicio-meu-plano/custom.css'

export default function CenteredRectangle() {
    const router = useRouter();

    const handleLogin = (event) => {
        event.preventDefault();
        // Lógica de autenticação (se necessário)

        // Redireciona o usuário para a página do plano
        router.push('/inicio-meu-plano/meuPlano');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="border-2 border-gray-300 p-16 rounded-lg shadow-lg w-11/12 max-w-5xl h-auto -mt-20 flex flex-col">
                {/* Botão Voltar */}
                <div className="flex justify-start mb-4">
                    <button className="bg-[#11304D] text-white py-2 px-4 rounded hover:bg-opacity-90">
                        Voltar
                    </button>
                </div>

                {/* Seção do Logotipo */}
                <div className="flex justify-center items-center mb-8">
                    <div className="w-24 h-24">
                        <img src="/images/logo.png" alt="Logo Falcommerce" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <span className="text-4xl font-bold ml-4">
                        Falcommerce
                    </span>
                </div>

                {/* Seção do Formulário de Login */}
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-sm p-8 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha:</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-center mb-6">
                                <input type="checkbox" id="lembrar" name="lembrar" className="mr-2" />
                                <label htmlFor="lembrar" className="text-sm text-gray-700">Lembrar-me</label>
                            </div>
                            {/* Botão Entrar */}
                            <button type="submit" className="bg-[#11304D] text-white py-2 px-4 rounded hover:bg-opacity-90 w-full mb-4">
                                Entrar
                            </button>
                        </form>
                        <div className="flex justify-between text-sm text-blue-600">
                            <a href="#" className="hover:underline">Esqueceu a senha?</a>
                            <a href="#" className="hover:underline">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
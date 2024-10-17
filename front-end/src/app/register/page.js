//src/app/register/page.js
import Link from 'next/link';
import { useRegister } from '@/hooks/useRegister';



export default function Register() {
    const {formData, handleChange, handleRegister} = useRegister

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister();
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screem bg-gray-100">
         <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Cadastro</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
                <input
                type="text"
                id="nome"
                name="nome"
                value={FormData.nome}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                value={FormData.email}
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
                value={FormData.senha}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                />
                </div>
                <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                Cadastrar
                </button>
            </form>
            <p className="mt-4 text-center">
                Já tem uma conta?{''}
                <Link href="/entrar"className="text-blue-600 hover.underline">
                Faça login
                </Link>
            </p>
            </div>
        </div>
    );
}
export default function CenteredRectangle() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="border-2 border-gray-300 p-16 rounded-lg shadow-lg w-11/12 max-w-5xl h-[600px] -mt-20 flex flex-col">
                {/* Botão Voltar */}
                <div className="flex justify-start mb-4">
                    <button className="bg-[#11304D] text-white py-2 px-4 rounded hover:bg-opacity-90">
                        Voltar
                    </button>
                </div>
                
                <div className="flex flex-grow">
                    {/* Seção do Formulário de Login */}
                    <div className="w-1/3 p-8 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>
                        <form>
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
                            <div className="mb-6">
                                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha:</label>
                                <input
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            {/* Botão Entrar */}
                            <button type="submit" className="bg-[#11304D] text-white py-2 px-4 rounded hover:bg-opacity-90 w-full">
                                Entrar
                            </button>
                        </form>
                    </div>
                    {/* Seção do Logotipo */}
                    <div className="flex-1 flex items-center justify-center  p-8 rounded-lg">
                        <div className="w-32 h-32">
                            <img src="/images/logo.png" alt="Logo Falcommerce" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <span className="text-5xl font-bold  ml-4">
                            Falcommerce
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
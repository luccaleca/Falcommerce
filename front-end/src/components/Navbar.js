"use client"; // Indica que este é um componente do cliente

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [showFuncionalidadesDropdown, setShowFuncionalidadesDropdown] = useState(false);
    const [showRecursosDropdown, setShowRecursosDropdown] = useState(false);

    return (
        <header className="bg-white text-black shadow-md border-b border-black"> {/* Linha divisória preta */}
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center text-2xl font-bold">
                        <img src="/images/logo.png" alt="Logo Falcommerce" className="h-8 mr-2" />
                        Falcommerce
                    </Link>
                    <nav className="flex space-x-4">
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowFuncionalidadesDropdown(!showFuncionalidadesDropdown);
                                    setShowRecursosDropdown(false);
                                }}
                                className="flex items-center hover:underline"
                            >
                                Funcionalidades <FaChevronDown className="ml-1" />
                            </button>
                            {showFuncionalidadesDropdown && (
                                <ul className="absolute mt-2 bg-white text-black rounded shadow-lg">
                                    <li><Link href="/funcionalidades/padrao" className="block px-4 py-2 hover:bg-gray-100">Padrão</Link></li>
                                    <li><Link href="/funcionalidades/personalizada" className="block px-4 py-2 hover:bg-gray-100">Personalizadas</Link></li>
                                    <li><Link href="/funcionalidades/hibrida" className="block px-4 py-2 hover:bg-gray-100">Híbridas</Link></li>
                                </ul>
                            )}
                        </div>
                        <Link href="/precos" className="hover:underline">Preços</Link>
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowRecursosDropdown(!showRecursosDropdown);
                                    setShowFuncionalidadesDropdown(false);
                                }}
                                className="flex items-center hover:underline"
                            >
                                Recursos <FaChevronDown className="ml-1" />
                            </button>
                            {showRecursosDropdown && (
                                <div className="absolute mt-2 bg-white text-black rounded shadow-lg p-6 w-72">
                                    <div className="mb-4">
                                        <h4 className="font-bold mb-2">Ajuda e Atendimento</h4>
                                        <ul className="space-y-2">
                                            <li><Link href="/ajuda/central" className="block hover:bg-gray-100">Central de Ajuda</Link></li>
                                            <li><Link href="/ajuda/suporte" className="block hover:bg-gray-100">Contato com Suporte</Link></li>
                                            <li><Link href="/blog" className="block hover:bg-gray-100">Blog da Falcommerce</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Tópicos Mais Acessados</h4>
                                        <ul className="space-y-2">
                                            <li><Link href="/sobre" className="block hover:bg-gray-100">O que é a Falcommerce?</Link></li>
                                            <li><Link href="/funcionalidades/mais-usadas" className="block hover:bg-gray-100">Funcionalidades Mais Usadas</Link></li>
                                            <li><Link href="/guia-inicio" className="block hover:bg-gray-100">Guia de Início Rápido</Link></li>
                                            <li><Link href="/crescimento-negocios" className="block hover:bg-gray-100">Crescimento dos Negócios</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                    <div className="flex space-x-4">
                        <Link href="/entrar" className="hover:underline">Fazer Login</Link>
                        <Link href="/comece-agora" className="bg-[#0D2B47] text-white py-1 px-4 rounded-full hover:bg-[#1a3e5c] transition duration-200">Comece Agora</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
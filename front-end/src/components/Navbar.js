"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const [showFuncionalidadesDropdown, setShowFuncionalidadesDropdown] = useState(false);
    const [showRecursosDropdown, setShowRecursosDropdown] = useState(false);
    const { user, logout } = useAuth();


    return (
        <header className="fixed top-0 left-0 right-0 bg-white text-black shadow-md border-b border-black z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center text-2xl font-bold mr-8">
                        <img src="/images/logo.png" alt="Logo Falcommerce" className="h-12 w-12 mr-2 rounded-full" />
                        Falcommerce
                    </Link>
                    <nav className="flex space-x-6 items-center text-lg">
                        <div
                            className="relative group"
                            onMouseEnter={() => setShowFuncionalidadesDropdown(true)}
                            onMouseLeave={() => setShowFuncionalidadesDropdown(false)}
                        >
                            <button className="flex items-center hover:underline">
                                Funcionalidades <FaChevronDown className="ml-1" />
                            </button>
                            {showFuncionalidadesDropdown && (
                                <ul className="absolute left-0 mt-0 bg-white text-black rounded shadow-lg z-10 w-48">
                                    <li><Link href="/funcionalidades/catalogo" className="block px-4 py-2 hover:bg-gray-100">Catálogo</Link></li>
                                    <li><Link href="/funcionalidades/padrao" className="block px-4 py-2 hover:bg-gray-100">Padrão</Link></li>
                                    <li><Link href="/funcionalidades/personalizada" className="block px-4 py-2 hover:bg-gray-100">Personalizadas</Link></li>
                                    <li><Link href="/funcionalidades/hibrida" className="block px-4 py-2 hover:bg-gray-100">Híbridas</Link></li>
                                </ul>
                            )}
                        </div>
                        <Link href="/planos" className="hover:underline">Planos</Link>
                        <div
                            className="relative group"
                            onMouseEnter={() => setShowRecursosDropdown(true)}
                            onMouseLeave={() => setShowRecursosDropdown(false)}
                        >
                            <button className="flex items-center hover:underline">
                                Recursos <FaChevronDown className="ml-1" />
                            </button>
                            {showRecursosDropdown && (
                                <div className="absolute left-0 mt-0 bg-white text-black rounded shadow-lg p-6 w-72 z-10">
                                    <div className="mb-4">
                                        <h4 className="font-bold mb-2">Ajuda e Atendimento</h4>
                                        <ul className="space-y-2">
                                            <Link href="/centralAjuda" className="block hover:bg-gray-100">Guia de Início</Link>
                                            <li><Link href="/centralAjuda/suporte" className="block hover:bg-gray-100">Suporte</Link></li>
                                            <li><Link href="/blog" className="block hover:bg-gray-100">Blog</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Tópicos Mais Acessados</h4>
                                        <ul className="space-y-2">
                                            <li><Link href="/sobreNos" className="block hover:bg-gray-100">O que é a Falcommerce?</Link></li>
                                            <li><Link href="/funcionalidades/catalogo#mais-usadas" className="block hover:bg-gray-100">Funcionalidades Mais Usadas</Link></li>
                                            <li><Link href="/centralAjuda/crescimentoDosSetores" className="block hover:bg-gray-100">Crescimento dos Setores</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link href="/novidades" className="hover:underline">Novidades</Link>
                    </nav>
                </div>
                <div className="flex space-x-4 items-center">
                    {user ? (
                        <>
                            <span className="hover:underline">Olá, {user.nome_usuario}</span>
                            <button onClick={logout} className="hover:underline">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/cadastrar" className="hover:underline">Cadastre-se</Link>
                            <span>|</span>
                            <Link href="/login" className="hover:underline">Faça login</Link>
                        </>
                    )}
                    <Link href="/comece-agora" className="bg-[#0D2B47] text-white py-2 px-4 rounded-full hover:bg-[#1a3e5c] transition duration-200">Comece Agora</Link>
                </div>
            </div>
        </header>
    );
}
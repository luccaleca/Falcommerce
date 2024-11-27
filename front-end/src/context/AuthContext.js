// src/context/AuthContext.js
"use client";

import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'; // Usando axios para chamadas HTTP

// Criação do contexto
const AuthContext = createContext();

// Provedor do contexto
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Estado para armazenar o usuário
    const router = useRouter();

    // Efeito para verificar se há um token no armazenamento local ao carregar o componente
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token).then(userData => {
                setUser(userData);
            }).catch(err => {
                console.error('Erro ao buscar dados do usuário:', err);
                // Aqui você pode adicionar lógica para tratamento de erro, como redirecionar para login se o token for inválido
            });
        }
    }, []);

    // Função para buscar dados do usuário do backend
    const fetchUserData = async (token) => {
        try {
            const response = await axios.get('http://localhost:5000/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Dados do usuário:', response.data); 
            return response.data; // Supondo que a API retorna os dados do usuário
        } catch (error) {
            throw new Error('Falha ao buscar os dados do usuário');
        }
    };

    // Função de login
    const login = (userData) => {
        setUser(userData); // Atualiza o estado do usuário com os dados recebidos
        router.push('/'); // Redireciona para a página inicial após o login
    };

    // Função de logout
    const logout = () => {
        setUser(null); // Limpa o estado do usuário
        localStorage.removeItem('token'); // Remove o token do armazenamento local
        router.push('/login'); // Redireciona para a página de login
    };

    // Valor fornecido para os componentes que consomem o contexto
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar o contexto de autenticação em outros componentes
export function useAuth() {
    return useContext(AuthContext);
}
// src/hooks/useLogin.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLogin() {
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(null); // Limpa o erro quando o usuário começa a digitar
        setSuccess(null); // Limpa a mensagem de sucesso também
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão de submit do formulário
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                setSuccess('Login bem-sucedido!');
                setError(null);
                setTimeout(() => { // Aguarda um momento antes de redirecionar
                    router.push('/');
                }, 1000); // Redireciona após 1 segundo
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Erro desconhecido');
                setSuccess(null);
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
            setError('Erro ao fazer login');
            setSuccess(null);
        }
    };

    return {
        formData,
        handleChange,
        handleLogin,
        error,
        success,
    };
}
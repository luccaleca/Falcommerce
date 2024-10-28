// src/hooks/useLogin.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLogin() {
    const [formData, setFormData] = useState({ email: '', senha: '' });
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                alert('Login bem-sucedido!');
                router.push('/');
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
            alert('Erro ao fazer login');
        }
    };

    return {
        formData,
        handleChange,
        handleLogin,
    };
}
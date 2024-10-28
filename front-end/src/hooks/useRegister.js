//src/hooks/useRegister.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';

export function useRegister() {
    const [formData, setFormData] = useState({ nome:'',email:'',senha:''});
    const router = useRouter();

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify(formData),
            });

            if(response.ok) {
                alert('Registro bem-sucedido!');
                router.push('/entrar');//redireciona para a pagina de login
            } else {
                const errorData = await response.json();
                alert(`Erro:${errorData.message}`);
            }
        } catch(error) {
            console.error('Erro ao registrar usuário',error);
            alert('Erro ao registrar usuário');
        }
    };

    return {
        formData,
        handleChange,
        handleRegister,
    };
}
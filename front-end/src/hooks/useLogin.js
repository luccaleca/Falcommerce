//src/hooks/useLogin.js
import { useState } from 'react'
import { useRouter } from 'next/router';

export function useLogin() {
    const [FormData, setFormData] = useState({email:'',senha:''});
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({...FormData, [e.target.name]: e.target.value});
    }

    const handleLogin = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/auth/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(FormData),
            });

            if(response.ok) {
                const data = await response.json();
            //aqui vai ficar as infos do token e informações do usuario
            localStorage.setItem('token', data.token);
            alert('Login bem-sucedido!');
            router.push('/'); //redireciona para pagina inicial ou dashboard
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Erro ao fazer login', error);
            alert('Erro ao fazer login')
        }
    };

    return {
        formData,
        handleChange,
        handleLogin
    };
}
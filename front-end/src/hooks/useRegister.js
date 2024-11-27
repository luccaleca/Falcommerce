// src/hooks/useRegister.js

import { useState } from 'react';
import { registerUser } from '../services/authService';

export const useRegister = () => {
  const [formData, setFormData] = useState({ nome_usuario: '', email: '', senha: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Você deve aceitar os termos de uso e a política de privacidade para se registrar.');
      return;
    }

    try {
      const data = await registerUser(formData);
      setSuccess('Cadastro realizado com sucesso!');
      setError(null);
      console.log('Usuário registrado:', data.user);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    acceptedTerms,
    setAcceptedTerms,
    error,
    success,
  };
};
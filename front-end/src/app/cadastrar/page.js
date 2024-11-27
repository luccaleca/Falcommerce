"use client";

import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';
import { useRegister } from '@/hooks/useRegister';

export default function Cadastrar() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  
  const {
    formData,
    handleChange,
    handleSubmit,
    acceptedTerms,
    setAcceptedTerms,
    error,
    success,
  } = useRegister();

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Cadastro</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
            <input
              type="text"
              id="nome_usuario"
              name="nome_usuario"
              value={formData.nome_usuario}
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
              value={formData.email}
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
              value={formData.senha}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-1 mr-2"
              />
              <label className="text-sm text-gray-700">
                Eu aceito os{' '}
                <button type="button" className="text-blue-600 hover:underline" onClick={() => openModal('Termos de Uso')}>
                  termos de uso
                </button>{' '}
                e a{' '}
                <button type="button" className="text-blue-600 hover:underline" onClick={() => openModal('Política de Privacidade')}>
                  política de privacidade
                </button>.
              </label>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded ${
              acceptedTerms ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            }`}
            disabled={!acceptedTerms}
          >
            Cadastrar
          </button>
        </form>
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}
        {success && <p className="mt-4 text-center text-green-600">{success}</p>}
        <p className="mt-4 text-center">
          Já tem uma conta?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
      
      {/* Modal para Termos e Política */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title={modalType}
      >
        {/* Aqui você pode colocar o conteúdo específico do modal baseado no tipo */}
        {modalType === 'Termos de Uso' && <p>Conteúdo dos Termos de Uso...</p>}
        {modalType === 'Política de Privacidade' && <p>Conteúdo da Política de Privacidade...</p>}
      </Modal>
    </div>
  );
}
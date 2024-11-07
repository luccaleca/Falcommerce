"use client";

import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';

export default function Cadastrar() {
    const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (acceptedTerms) {
            alert('Cadastro submetido com sucesso!');
        } else {
            alert('Você deve aceitar os termos de uso e a política de privacidade para se registrar.');
        }
    };

    const openTermsModal = () => {
        setModalType('Termos de Uso');
        setShowModal(true);
    };

    const openPrivacyModal = () => {
        setModalType('Política de Privacidade');
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
                            id="nome"
                            name="nome"
                            value={formData.nome}
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
                                <button type="button" onClick={openTermsModal} className="text-blue-600 hover:underline">
                                    termos de uso
                                </button>{' '}
                                e a{' '}
                                <button type="button" onClick={openPrivacyModal} className="text-blue-600 hover:underline">
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
                {modalType === 'Termos de Uso' && (
                    <div>
                        <p className="mb-4">
                            Bem-vindo aos Termos de Uso da Falcommerce. Ao acessar e usar nosso serviço, você concorda com os termos e condições listados abaixo.
                        </p>
                        <h2 className="text-lg font-bold mt-4 mb-2">1. Aceitação dos Termos</h2>
                        <p className="mb-4">
                            Ao acessar nosso aplicativo e nossos serviços, você concorda em cumprir e estar vinculado por estes Termos de Uso e pela nossa Política de Privacidade.
                        </p>
                        <h2 className="text-lg font-bold mt-4 mb-2">2. Alterações nos Termos</h2>
                        <p className="mb-4">
                            Reservamo-nos o direito de modificar estes Termos a qualquer momento. Tais modificações entrarão em vigor imediatamente após a publicação no site.
                        </p>
                        {/* Adicione mais seções conforme necessário */}
                    </div>
                )}
                {modalType === 'Política de Privacidade' && (
                    <div>
                        <p className="mb-4">
                            Esta Política de Privacidade explicita como coletamos, usamos e compartilhamos suas informações quando você usa nossos serviços.
                        </p>
                        <h2 className="text-lg font-bold mt-4 mb-2">1. Informações que Coletamos</h2>
                        <p className="mb-4">
                            Podemos coletar informações pessoais que você nos fornece diretamente, como nome, endereço de email, número de telefone e informações de pagamento.
                        </p>
                        <h2 className="text-lg font-bold mt-4 mb-2">2. Como Usamos Suas Informações</h2>
                        <p className="mb-4">
                            Usamos suas informações para fornecer, manter e melhorar nossos serviços, processar transações e enviar informações relacionadas, incluindo confirmações e faturas.
                        </p>
                        {/* Adicione mais seções conforme necessário */}
                    </div>
                )}
            </Modal>
        </div>
    );
}
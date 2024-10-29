// src/app/centralAjuda/contatoSuporte/page.js
"use client";

export default function ContatoSuporte() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Suporte</h1>
            <p className="mb-8 text-center">Estamos aqui para ajudar. Se você tiver dúvidas ou precisar de assistência, entre em contato conosco através das opções abaixo.</p>
            
            <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-semibold mb-2">E-mail</h2>
                    <p>Envie suas dúvidas para: <a href="mailto:suporte@falcommerce.com" className="text-blue-600">suporte@falcommerce.com</a></p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-semibold mb-2">Chat ao Vivo</h2>
                    <p>Converse com um de nossos atendentes em tempo real através do chat disponível em nosso site.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                    <h2 className="text-2xl font-semibold mb-2">FAQ</h2>
                    <p>Visite nossa <a href="/centralAjuda/faqs" className="text-blue-600">seção de FAQs</a> para respostas rápidas a perguntas comuns.</p>
                </div>
            </div>
        </div>
    );
}
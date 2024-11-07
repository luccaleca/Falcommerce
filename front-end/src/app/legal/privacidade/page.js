// src/app/legal/privacidade/page.js

"use client";

export default function Privacidade() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
            <p className="mb-4">
                Esta Política de Privacidade explicita como coletamos, usamos e compartilhamos suas informações quando você usa nossos serviços.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">1. Informações que Coletamos</h2>
            <p className="mb-4">
                Podemos coletar informações pessoais que você nos fornece diretamente, como nome, endereço de email, número de telefone e informações de pagamento.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">2. Como Usamos Suas Informações</h2>
            <p className="mb-4">
                Usamos suas informações para fornecer, manter e melhorar nossos serviços, processar transações e enviar informações relacionadas, incluindo confirmações e faturas.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">3. Compartilhamento de Informações</h2>
            <p className="mb-4">
                Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">4. Segurança dos Dados</h2>
            <p className="mb-4">
                Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado e divulgação.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">5. Seus Direitos</h2>
            <p className="mb-4">
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento.
            </p>
            {/* Adicione mais seções conforme necessário */}
        </div>
    );
}
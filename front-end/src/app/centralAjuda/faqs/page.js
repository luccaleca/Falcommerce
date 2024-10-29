// src/app/centralAjuda/faqs/page.js
"use client";

export default function FAQs() {
    const faqs = [
        {
            pergunta: 'Como faço para alterar minha senha?',
            resposta: 'Para alterar sua senha, vá para Configurações de Conta e clique em "Alterar Senha".'
        },
        {
            pergunta: 'Como posso atualizar minhas informações de pagamento?',
            resposta: 'Acesse a seção de Pagamentos em sua conta para atualizar suas informações de pagamento.'
        },
        {
            pergunta: 'Quais são os planos disponíveis?',
            resposta: 'Oferecemos planos Básico, Intermediário, Avançado e Elite. Cada um tem funcionalidades e preços diferentes.'
        },
        {
            pergunta: 'Como faço para mudar de plano?',
            resposta: 'Você pode mudar de plano a qualquer momento através da seção de Planos em sua conta.'
        },
        {
            pergunta: 'Como entro em contato com o suporte técnico?',
            resposta: 'Você pode entrar em contato com nosso suporte técnico através do e-mail suporte@falcommerce.com ou pelo telefone (00) 00000-0000.'
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Perguntas Frequentes (FAQs)</h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <h2 className="text-2xl font-semibold mb-2">{faq.pergunta}</h2>
                        <p>{faq.resposta}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
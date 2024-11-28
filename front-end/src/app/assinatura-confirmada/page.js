// src/app/assinatura-confirmada/page.js
'use client';
export default function AssinaturaConfirmada() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Assinatura Confirmada!</h1>
        <p className="mb-4">
          Parabéns! Sua assinatura foi realizada com sucesso. Agora você tem acesso ao seu plano e todas as funcionalidades disponíveis.
        </p>
        <button 
          className="mt-6 bg-[#0D2B47] text-white py-2 px-4 rounded-lg hover:bg-[#1a3e5c] transition duration-200"
          onClick={() => window.location.href = '/inicio-meu-plano'} // Redirecionar para a página do plano do usuário
        >
          Acessar Meu Plano
        </button>
      </div>
    );
  }
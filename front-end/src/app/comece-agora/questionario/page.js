// src/app/comece-agora/questionario/page.js

'use client';

import React from 'react';
import { useQuestionario } from '@/hooks/useQuestionario';
import { useRouter } from 'next/navigation';

export default function Questionario() {
  const { perguntas, respostas, handleChange, determinarPorte } = useQuestionario();
  const router = useRouter();

  const verificarRespostas = () => {
    // Verifica se todas as perguntas foram respondidas
    return perguntas.every(pergunta => respostas[pergunta.name]);
  };

  const handleConcluir = () => {
    if (verificarRespostas()) {
      const porte = determinarPorte();
      router.push(`/comece-agora/questionario/resultado?porte=${porte}`);
    } else {
      alert('Por favor, responda todas as perguntas antes de concluir.');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Questionário</h1>
        
        {perguntas.map((pergunta, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{`Pergunta ${index + 1}: ${pergunta.pergunta}`}</h2>
            <div className="flex flex-col space-y-4">
              {pergunta.opcoes.map(opcao => (
                <label key={opcao.texto} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={pergunta.name}
                    value={opcao.texto}
                    checked={respostas[pergunta.name] === opcao.texto}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-blue-600"
                  />
                  <span className="text-gray-700">{opcao.texto}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-8">
          <button
            onClick={handleConcluir}
            className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}
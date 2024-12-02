// src/app/inicio-meu-plano/meuplano/page.js


import "../../inicio-meu-plano/custom.css"
import Sidebar from "@/components/meuPlano/Sidebar";

export default function MeuPlano() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow p-4 bg-white">
        {/* Adicione o conteúdo aqui */}
        <h1>Meu Plano</h1>
        <p>Detalhes e informações do plano do usuário.</p>
      </main>
    </div>
  );
}
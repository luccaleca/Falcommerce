// src/app/legal/termos/page.js

"use client";

export default function Termos() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
            <p className="mb-4">
                Bem-vindo aos Termos de Uso da Falcommerce. Ao acessar e usar nosso serviço, você concorda com os termos e condições listados abaixo.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">1. Aceitação dos Termos</h2>
            <p className="mb-4">
                Ao acessar nosso aplicativo e nossos serviços, você concorda em cumprir e estar vinculado por estes Termos de Uso e pela nossa Política de Privacidade.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">2. Alterações nos Termos</h2>
            <p className="mb-4">
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. Tais modificações entrarão em vigor imediatamente após a publicação no site.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">3. Uso dos Serviços</h2>
            <p className="mb-4">
                Você concorda em usar nossos serviços apenas para os fins permitidos por (a) os Termos e (b) qualquer lei, regulamento ou prática geralmente aceita na jurisdição relevante.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">4. Contas de Usuário</h2>
            <p className="mb-4">
                Para acessar certas funcionalidades, você poderá ser solicitado a criar uma conta e fornecer informações sobre si mesmo. Você concorda em manter suas informações de registro precisas, completas e atualizadas.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">5. Privacidade e Proteção de Dados</h2>
            <p className="mb-4">
                Nossa Política de Privacidade descreve como lidamos com suas informações pessoais e protegemos sua privacidade ao usar nosso serviço. Ao usar nossos serviços, você concorda que podemos usar esses dados de acordo com nossa política.
            </p>
            <h2 className="text-2xl font-bold mt-4 mb-2">6. Rescisão</h2>
            <p className="mb-4">
                Reservamo-nos o direito de suspender ou encerrar sua conta caso você viole qualquer termo acordado.
            </p>
            {/* Adicione mais seções conforme necessário */}
        </div>
    );
}
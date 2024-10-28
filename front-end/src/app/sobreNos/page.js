//src/app/sobreNos/page.js
export default function SobreNos() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4x1 font-bold mb-6 text-center">Sobre Nós</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Nossa Proposta</h2>
                <p className="text-lg">A Falcommerce é uma empresa SaaS focada em fornecer softwares que irão auxiliar toda a estrutura
                    por trás de um e-commerce. Com o objetivo de democratizar as automações que os softwares são capazes de 
                    fornecer, A Falcommerce foi criada para oferecer soluções de automação para todos os setores de um e-commerce,
                    incluindo áreas como marketing, vendas, financeiro,logística, estoque, entre outras. Nosso público alvo inclui desde
                    negócios iniciantes até marcas consolidadas ja no mercado, sempre oferecendo os serviços de forma economica e acessivel.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Missão, Visão e Valores</h2>
                <ul className="list-disc pl-5 space-y-2">
                <li><strong>Missão:</strong>Empoderar empreendedores com soluções tecnológicas que simplificam o e-commerce.</li>
                <li><strong>Visão:</strong>Ser reconhecida como a principal plataforma de e-commerce para PMEs</li>
                <li><strong>Valores:</strong>Inovação, Transparência, Compromisso e Colaboração</li>
                </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">O que Fazemos</h2>
                    <p className="text-lg">Oferecemos uma gama de ferramentas que ajudam empresas a gerenciar inventarios, analisar desempenho de vendas
                        e identificar tendências de mercado, tudo através de uma interface fácil e intuitiva.
                    </p>
                </section>


                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Nossa equipe</h2>
                    <p className="text-lg">Fundada por um grupo de alunos interessados em soluções tecnológicas, a equipe da Falcommerce é dedicada a criar soluções
                        que realmente faram diferença nas empresas.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Nossos Objetivos</h2>
                    <p className="text-lg">Estamos focados em desenvolver e focar nossa plataforma, buscando parcerias estratégicas e expandindo nossa presença no 
                    mercado</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
                    <p className="text-lg">Gostariamos de ouvir você! Para saber mais sobre nossos planos e como podemos ajudar seu negócio, entre em contato  
                        <a href="/contato" className="text-blue-600 hover.underline"> contato conosco.</a>
                    </p>
                </section>
        </div>
    )
}
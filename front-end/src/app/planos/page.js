// src/app/planos/page.js
import { FaCheck } from 'react-icons/fa';

export default function Planos() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Planos e Preços</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    {
                        nome: 'Básico',
                        preco: 'R$ 149',
                        funcionalidades: 'Até 3 funcionalidades padrão',
                        hibridas: 'Disponíveis por R$ 500 cada',
                        personalizadas: 'Disponíveis por R$ 2.500 cada',
                        suporte: 'Chat sempre à disposição',
                        contas: 'Até 3 contas permitidas',
                        requisicoes: 'Até 10.000 requisições/mês',
                        armazenamento: '5 GB de armazenamento de dados',
                        descontos: 'Economiza 5% em funcionalidades adicionais',
                    },
                    {
                        nome: 'Intermediário',
                        preco: 'R$ 299',
                        funcionalidades: 'Até 6 funcionalidades padrão',
                        hibridas: 'Inclui 1 funcionalidade híbrida, adicionais por R$ 450 cada',
                        personalizadas: 'Disponíveis por R$ 2.250 cada',
                        suporte: 'E-mail com resposta prioritária',
                        contas: 'Até 5 contas permitidas',
                        requisicoes: 'Até 50.000 requisições/mês',
                        armazenamento: '10 GB de armazenamento de dados',
                        descontos: 'Economiza 10% em funcionalidades adicionais',
                    },
                    {
                        nome: 'Avançado',
                        preco: 'R$ 499',
                        funcionalidades: 'Até 9 funcionalidades padrão',
                        hibridas: 'Inclui 2 funcionalidades híbridas, adicionais por R$ 400 cada',
                        personalizadas: 'Inclui 1 crédito por ano, adicionais por R$ 2.000 cada',
                        suporte: 'E-mail e chat',
                        contas: 'Até 10 contas permitidas',
                        requisicoes: 'Até 100.000 requisições/mês',
                        armazenamento: '20 GB de armazenamento de dados',
                        descontos: 'Economiza 15% em funcionalidades adicionais',
                    },
                    {
                        nome: 'Elite',
                        preco: 'R$ 2.499',
                        funcionalidades: 'Funcionalidades padrão ilimitadas',
                        hibridas: 'Inclui 5 funcionalidades híbridas, adicionais por R$ 350 cada',
                        personalizadas: 'Inclui 2 créditos por ano, adicionais por R$ 1.800 cada',
                        suporte: 'Prioritário, com telefone',
                        contas: 'Contas ilimitadas',
                        requisicoes: 'Requisições ilimitadas',
                        armazenamento: 'Armazenamento ilimitado',
                        descontos: 'Economiza 20% em funcionalidades adicionais',
                    },
                ].map((plano) => (
                    <div key={plano.nome} className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{plano.nome}</h2>
                            <p className="text-4xl font-bold mb-4">{plano.preco}/mês</p>
                            <ul className="mb-4 space-y-2">
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> {plano.funcionalidades}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Funcionalidades Híbridas: {plano.hibridas}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Funcionalidades Personalizadas: {plano.personalizadas}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> Suporte: {plano.suporte}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> {plano.contas}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> {plano.requisicoes}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> {plano.armazenamento}
                                </li>
                                <li className="flex items-center">
                                    <FaCheck className="text-green-500 mr-2" /> {plano.descontos}
                                </li>
                            </ul>
                        </div>
                        <button className="bg-[#0D2B47] text-white py-2 px-4 rounded-full hover:bg-[#1a3e5c] transition duration-200 mt-auto">
                            Escolher Plano
                        </button>
                    </div>
                ))}
            </div>

            {/* Seção "Qual é o Melhor Plano para o Seu Negócio?" */}
            <section className="mt-12">
                <h2 className="text-3xl font-bold mb-4 text-center">Qual é o Melhor Plano para o Seu Negócio?</h2>
                <div className="space-y-6">
                    {[
                        {
                            nome: 'Básico',
                            caracteristicas: [
                                'Até 500 leads mensais',
                                'Gastos com anúncios de até R$ 1.000/mês',
                                'Taxa de conversão de até 2%',
                                'Tráfego mensal de até 10.000 visitas',
                            ],
                        },
                        {
                            nome: 'Intermediário',
                            caracteristicas: [
                                '500 a 2.000 leads mensais',
                                'Gastos com anúncios de até R$ 5.000/mês',
                                'Taxa de conversão entre 2% e 4%',
                                'Tráfego mensal de até 50.000 visitas',
                            ],
                        },
                        {
                            nome: 'Avançado',
                            caracteristicas: [
                                '3.000 a 8.000 leads mensais',
                                'Gastos com anúncios de até R$ 20.000/mês',
                                'Taxa de conversão entre 4% e 6%',
                                'Tráfego mensal de até 100.000 visitas',
                            ],
                        },
                        {
                            nome: 'Elite',
                            caracteristicas: [
                                'Mais de 8.000 leads mensais',
                                'Gastos com anúncios acima de R$ 100.000/mês',
                                'Taxa de conversão acima de 8%',
                                'Tráfego mensal superior a 300.000 visitas',
                                'Gerente de conta dedicado',
                                'Acesso antecipado a funcionalidades',
                                'Parcerias estratégicas',
                            ],
                        },
                    ].map((plano) => (
                        <div key={plano.nome} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{plano.nome}</h3>
                            <ul className="list-disc pl-6">
                                {plano.caracteristicas.map((caracteristica, index) => (
                                    <li key={index}>{caracteristica}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
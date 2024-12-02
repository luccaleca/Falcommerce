// src/app/blog/page.js
"use client";

import Link from "next/link";

export default function Blog() {
    const posts = [
        {
            id: 1,
            titulo: "Como otimizar seu e-commerce",
            descricao: "Dicas e truques para melhorar a performance do seu e-commerce.",
            data: "29 de Outubro de 2024",
            imagem: "/images/blog/blog_otimizar_ecommerce.png"
        },
        {
            id: 2,
            titulo: "Tendências de marketing digital em 2024",
            descricao: "Descubra as principais tendências de marketing digital para o próximo ano.",
            data: "15 de Outubro de 2024",
            imagem: "/images/blog/tendencia_marketing.png"
        },
        {
            id: 3,
            titulo: "Guia completo para SEO",
            descricao: "Tudo o que você precisa saber para melhorar o SEO do seu site.",
            data: "1 de Outubro de 2024",
            imagem: "/images/blog/guia_ceo.png"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <div key={post.id} className="border border-gray-300 rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-200">
                        <img src={post.imagem} alt={post.titulo} className="rounded-t-lg w-full h-40 object-cover mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{post.titulo}</h2>
                        <p className="text-sm text-gray-500 mb-2">{post.data}</p>
                        <p className="mb-4">{post.descricao}</p>
                        <Link href={`/blog/${post.id}`}>
                            <span className="text-blue-600 hover:underline">Leia mais</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
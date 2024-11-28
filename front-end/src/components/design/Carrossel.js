"use client";

import React, { useState } from 'react';

const Carrossel = () => {
  // Estado para armazenar o índice do slide atual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slides com as imagens e textos
  const slides = [
    {
      image: "/images/Carrossel/carrossel_slide1_resumo.png",
      title: "Impulsione Seu Negócio",
      description: "Transforme o desempenho do seu e-commerce com nossos serviços."
    },
    {
      image: "/images/Carrossel/carrossel_slide2_integracao.png",
      title: "Integrações com plataformas de e-commerce",
      description: "Integre sistemas que você ja utiliza com nossas funcionalidades."
    },
    {
      image: "/images/Carrossel/carrossel_slide3_funcionalidades.png",
      title: "Funcionalidades Inovadoras",
      description: "Descubra ferramentas que aceleram seu crescimento."
    },
  ];

  // Função para avançar para o próximo slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Função para voltar para o slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container" style={{ maxWidth: '1000px', margin: 'auto', position: 'relative', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div 
        className="carousel-slide"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          backgroundColor: '#f5f5f5',
          borderRadius: '15px',
          height: '400px',
        }}
      >
        <div style={{
          flex: 0.4, // Menos espaço para o texto
          padding: '20px',
          color: '#333',
        }}>
          <h1 className="text-4xl font-bold mb-2">{slides[currentIndex].title}</h1>
          <p className="text-xl">{slides[currentIndex].description}</p>
        </div>
        <div style={{
          flex: 0.6, // Mais espaço para a imagem
          height: '100%',
          backgroundImage: `url(${slides[currentIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.15)',
          transition: 'background-image 0.5s ease-in-out',
        }}>
          {/* Espaço reservado para a imagem em background */}
        </div>
      </div>
      <button onClick={prevSlide} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>
        ⟵
      </button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>
        ⟶
      </button>
    </div>
  );
};

export default Carrossel;
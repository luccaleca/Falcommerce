// src/components/Footer.js

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0D2B47] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Falcommerce</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline text-gray-300">Sobre Nós</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Termos de Serviço</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Contato</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Mapa do Site</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Central de Ajuda</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline text-gray-300">Base de Conhecimento</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Suporte</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">FAQs</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Comunidade</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Guia de Início</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Funcionalidades</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline text-gray-300">Catálogo</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Padrão</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Personalizadas</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Híbridas</Link></li>
              <li><Link href="#" className="hover:underline text-gray-300">Atualizações de Produtos</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Siga-nos</h3>
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-gray-400"><FaFacebook size={24} /></Link></li>
              <li><Link href="#" className="hover:text-gray-400"><FaInstagram size={24} /></Link></li>
              <li><Link href="#" className="hover:text-gray-400"><FaYoutube size={24} /></Link></li>
              <li><Link href="#" className="hover:text-gray-400"><FaTiktok size={24} /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
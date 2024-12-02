"use client"; // Mantém o componente como cliente

import localFont from "next/font/local";
import "./styles/global.css";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Importa o hook de navegação
import { AuthProvider } from "@/context/AuthContext";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Definição de fontes personalizadas
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Obtém o pathname atual

  // Define páginas onde o header e o footer serão ocultados
  const pagesWithoutHeaderFooter = ['/inicio-meu-plano', '/iniciar-meu-plano/meuPlano', '/inicio-meu-plano/meuPlano' ];
  

  // Verifica se a página atual deve ocultar o header e o footer
  const isSpecialPage = pagesWithoutHeaderFooter.includes(pathname);

  return (
    <AuthProvider>
      <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="flex flex-col min-h-screen">
          {/* Renderiza o Navbar apenas se não estiver na página especial */}
          {!isSpecialPage && <Navbar />}
          <div className={isSpecialPage ? "" : "mt-12"}>
          <main className="flex-grow max-w-screen-xl mx-auto px-4 py-8">
  {children}
</main>
          </div>
          {/* Renderiza o Footer apenas se não estiver na página especial */}
          {!isSpecialPage && <Footer />}
        </body>
      </html>
    </AuthProvider>
  );
}
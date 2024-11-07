// app/layout.js
"use client"; // Mantém o componente como cliente

import localFont from "next/font/local";
import "./styles/global.css";
import Link from "next/link";

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
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="mt-12"> 
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
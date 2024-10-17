import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

// Metadados da página
export const metadata = {
  title: "Falcommerce",
  description: "Plataforma SaaS que fornece funcionalidades para e-commerces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        {/* Cabeçalho */}
        <header className="bg-blue-600 text-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">Falcommerce</Link>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link href="/" className="hover:text-blue-200">Home</Link></li>
                  <li><Link href="/sobre" className="hover:text-blue-200">Sobre</Link></li>
                  <li><Link href="/planos" className="hover:text-blue-200">Planos</Link></li>
                  <li><Link href="/contato" className="hover:text-blue-200">Contato</Link></li>
                  <li><Link href="/entrar" className="hover:text-blue-200">Entrar</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        
        {/* Conteúdo principal */}
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Rodapé */}
        <footer className="bg-gray-100 text-gray-600 shadow-inner">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <p>© 2024 Falcommerce. Todos os direitos reservados.</p>
              <nav>
                <ul className="flex space-x-4">
                  <li><Link href="/termos" className="hover:text-blue-600">Termos de Uso</Link></li>
                  <li><Link href="/privacidade" className="hover:text-blue-600">Política de Privacidade</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
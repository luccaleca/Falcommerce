import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="text-center">
    <h1>Bem-vindo à Falcommerce</h1>
    <p className="text-xl mb-8">A plataforma ideal para impulsionar seu e-commerce</p>
    <div className="space-x-4">
      <Link href="/planos">Ver planos</Link>
      <Link href="/sobre">Saiba Mais</Link>
    </div>
   </div>
  );
}

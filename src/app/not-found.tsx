import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-gray-800 text-white p-6 rounded shadow-lg">
        <Image
          src="/img/error-image.png" 
          alt="Erro 404"
          width={300} 
          height={200} 
          className="mb-4" 
        />
        <h1 className="text-5xl mb-4">404: Parece que você se perdeu...</h1>
        <Link 
          href="/" 
          className="text-2xl underline transition hover:text-yellow-400"
        >
          Voltar para a página principal
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#121417] flex flex-col items-center justify-center text-center px-6 gap-5">
      <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3">
        Erro 404
      </span>
      <h1 className="font-serif text-2xl sm:text-3xl font-light text-white">
        Página não encontrada
      </h1>
      <p className="text-sm text-gray-400 max-w-md">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="text-[11px] font-semibold tracking-widest uppercase bg-[#9a1c24] hover:bg-[#80141a] text-white px-6 py-3 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Voltar para o início
      </Link>
    </div>
  );
}

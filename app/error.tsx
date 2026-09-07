"use client"; // Error boundaries precisam ser Client Components

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] bg-[#121417] flex flex-col items-center justify-center text-center px-6 gap-5">
      <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3">
        Algo deu errado
      </span>
      <h1 className="font-serif text-2xl sm:text-3xl font-light text-white">
        Não foi possível carregar esta seção
      </h1>
      <p className="text-sm text-gray-400 max-w-md">
        Ocorreu um erro inesperado. Você pode tentar novamente — se persistir,
        recarregue a página.
      </p>
      <button
        type="button"
        onClick={() => unstable_retry()}
        className="text-[11px] font-semibold tracking-widest uppercase bg-[#9a1c24] hover:bg-[#80141a] text-white px-6 py-3 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Tentar novamente
      </button>
    </div>
  );
}

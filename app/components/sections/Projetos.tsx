"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { projetos, categoriasProjetos } from "@/content/projetos";
import { usePrefersReducedMotion } from "@/lib/hooks";

const FILTROS = ["Todos", ...categoriasProjetos] as const;

export default function Projetos() {
  const reduzMovimento = usePrefersReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausadoRef = useRef(false);
  const [filtro, setFiltro] = useState<(typeof FILTROS)[number]>("Todos");

  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === filtro);

  // Autoplay suave do carrossel; pausa no hover e com prefers-reduced-motion.
  useEffect(() => {
    if (reduzMovimento) return;
    const container = scrollRef.current;
    if (!container) return;

    const id = setInterval(() => {
      if (pausadoRef.current) return;
      const fim =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;
      if (fim) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: container.clientWidth * 0.8,
          behavior: "smooth",
        });
      }
    }, 5000);

    return () => clearInterval(id);
  }, [reduzMovimento]);

  // Volta o carrossel ao início ao trocar de filtro.
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [filtro]);

  const rolar = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section
      id="projetos"
      className="relative w-full bg-[#f9f6f0] py-20 md:py-24 px-6 text-[#121417] z-10 border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
                Portfólio Expandido
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-[#121417] font-serif">
                Nossas <span className="font-semibold">Obras Recentes</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 text-[11px] font-medium tracking-widest uppercase text-gray-500">
              {FILTROS.map((opcao) => (
                <button
                  key={opcao}
                  type="button"
                  onClick={() => setFiltro(opcao)}
                  aria-pressed={filtro === opcao}
                  className={`px-4 py-2 rounded-sm cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24] ${
                    filtro === opcao
                      ? "bg-[#121417] text-white"
                      : "hover:text-[#121417]"
                  }`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>

          <div className="relative w-full flex items-center gap-4">
            <button
              type="button"
              onClick={() => rolar(-380)}
              className="w-12 h-12 rounded-full border border-black/10 bg-white text-[#121417] hover:bg-[#9a1c24] hover:text-white hover:border-[#9a1c24] shadow-md hidden md:flex items-center justify-center transition-all duration-300 shrink-0 z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24]"
              aria-label="Voltar obras"
            >
              &larr;
            </button>

            <div
              ref={scrollRef}
              onMouseEnter={() => (pausadoRef.current = true)}
              onMouseLeave={() => (pausadoRef.current = false)}
              className="w-full overflow-x-auto flex gap-6 md:gap-8 snap-x snap-mandatory pb-4 md:pb-2 no-scrollbar scroll-smooth"
            >
              {projetosFiltrados.length > 0 ? (
                projetosFiltrados.map((projeto) => (
                  <div
                    key={projeto.id}
                    className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 min-w-[85vw] md:min-w-[calc(33.333%-22px)] snap-start shrink-0"
                  >
                    <Image
                      src={projeto.imagem}
                      alt={projeto.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="relative p-6 text-white z-10">
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">
                        {projeto.rotulo}
                      </span>
                      <h3 className="font-serif text-xl font-light mt-1">
                        {projeto.titulo}
                      </h3>
                      <p className="text-xs text-gray-300 mt-1">
                        {projeto.local}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-16 border border-dashed border-black/10 rounded-2xl">
                  <p className="text-sm text-gray-500 tracking-wide">
                    Nenhuma obra publicada nesta categoria ainda.
                  </p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => rolar(380)}
              className="w-12 h-12 rounded-full border border-black/10 bg-white text-[#121417] hover:bg-[#9a1c24] hover:text-white hover:border-[#9a1c24] shadow-md hidden md:flex items-center justify-center transition-all duration-300 shrink-0 z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24]"
              aria-label="Avançar obras"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <a
            href="#contato"
            className="text-[11px] font-medium tracking-widest uppercase bg-[#121417] text-white px-8 py-4 rounded-sm hover:bg-[#9a1c24] transition-all duration-300 shadow-md flex items-center gap-3 group"
          >
            Solicitar Portfólio Completo
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

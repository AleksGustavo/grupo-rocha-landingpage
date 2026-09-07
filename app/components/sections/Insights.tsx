"use client";

import { useState } from "react";
import Image from "next/image";
import { artigos, categoriasInsights } from "@/content/artigos";

export default function Insights() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const artigosFiltrados =
    categoriaAtiva === "Todos"
      ? artigos
      : artigos.filter((artigo) => artigo.categoria === categoriaAtiva);

  const artigoPrincipal =
    artigosFiltrados.find((a) => a.destaque) || artigosFiltrados[0];
  const demaisArtigos = artigosFiltrados.filter(
    (a) => a.id !== artigoPrincipal?.id,
  );

  return (
    <section
      id="insights"
      className="relative w-full bg-[#121417] py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-white/5 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
              Nosso Conhecimento
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-white font-serif">
              Insights & <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Tendências
              </span>
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 pb-2 border-b border-white/5">
          {categoriasInsights.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoriaAtiva(cat)}
              aria-pressed={categoriaAtiva === cat}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24] ${
                categoriaAtiva === cat
                  ? "bg-[#9a1c24] border-[#9a1c24] text-white"
                  : "bg-[#1a1d24]/40 border-white/10 text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col gap-8 md:gap-12">
          {artigoPrincipal && (
            <div className="group relative w-full bg-[#1a1d24]/30 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:border-[#9a1c24]/50 cursor-pointer">
              <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-auto min-h-[260px] overflow-hidden bg-gray-900 shrink-0">
                <Image
                  src={artigoPrincipal.imagem}
                  alt={artigoPrincipal.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#121417]/80 via-transparent to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20 bg-[#9a1c24] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  Destaque • {artigoPrincipal.categoria}
                </div>
              </div>
              <div className="p-5 sm:p-8 flex flex-col justify-between flex-grow gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 tracking-wider">
                    <span>{artigoPrincipal.data}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{artigoPrincipal.tempoLeitura}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light leading-tight group-hover:text-[#c5a880] transition-colors duration-300">
                    {artigoPrincipal.titulo}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm tracking-wide leading-relaxed line-clamp-3">
                    {artigoPrincipal.resumo}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#9a1c24] transition-colors duration-300 mt-2">
                  Ler artigo completo{" "}
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          )}

          {demaisArtigos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {demaisArtigos.map((artigo) => (
                <div
                  key={artigo.id}
                  className="group bg-[#1a1d24]/20 border border-white/5 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#1a1d24]/40 cursor-pointer"
                >
                  <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-900">
                    <Image
                      src={artigo.imagem}
                      alt={artigo.titulo}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-20 bg-white/10 backdrop-blur-md text-white text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border border-white/10">
                      {artigo.categoria}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 tracking-wider">
                        <span>{artigo.data}</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span>{artigo.tempoLeitura}</span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg text-white font-light leading-snug group-hover:text-[#c5a880] transition-colors duration-300 line-clamp-2">
                        {artigo.titulo}
                      </h4>
                      <p className="text-gray-400 text-xs tracking-wide leading-relaxed line-clamp-2">
                        {artigo.resumo}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-300 font-medium group-hover:text-white transition-colors duration-300 pt-1">
                      Continuar lendo <span>&rarr;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-white/10 rounded-xl bg-[#1a1d24]/10">
              <p className="text-sm text-gray-500 tracking-wide">
                Nenhum insight publicado nesta categoria ainda.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

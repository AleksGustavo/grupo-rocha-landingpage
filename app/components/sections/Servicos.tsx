"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { servicos, type IconeServico } from "@/content/servicos";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

const ICONE_SVG_PROPS = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "w-9 h-9 md:w-11 md:h-11",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const ICONES: Record<IconeServico, ReactNode> = {
  arquitetura: (
    <svg {...ICONE_SVG_PROPS}>
      <path d="m15 5-3-3-3 3" />
      <path d="M12 2v20" />
      <path d="m5 16 7-9 7 9" />
      <path d="M19 19H5" />
    </svg>
  ),
  residencial: (
    <svg {...ICONE_SVG_PROPS}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  comercial: (
    <svg {...ICONE_SVG_PROPS}>
      <rect x="2" y="10" width="10" height="12" rx="2" />
      <rect x="12" y="2" width="10" height="20" rx="2" />
      <path d="M6 14h.01" />
      <path d="M6 18h.01" />
      <path d="M16 6h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M16 18h.01" />
    </svg>
  ),
  interiores: (
    <svg {...ICONE_SVG_PROPS}>
      <path d="M3 11h18" />
      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M12 2v3" />
      <path d="M6 11v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-7" />
      <path d="M9 20v2" />
      <path d="M15 20v2" />
    </svg>
  ),
  gestao: (
    <svg {...ICONE_SVG_PROPS}>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </svg>
  ),
  consultoria: (
    <svg {...ICONE_SVG_PROPS}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};

export default function Servicos() {
  const isMobile = useIsMobile();
  const reduzMovimento = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [pagina, setPagina] = useState(0);

  const totalPaginas = isMobile
    ? servicos.length
    : Math.ceil(servicos.length / 3);
  // Deriva a página válida em vez de guardar um valor fora do intervalo
  // quando o breakpoint (e portanto totalPaginas) muda.
  const paginaAtual = Math.min(pagina, totalPaginas - 1);

  // Autoplay apenas no desktop e se o usuário não pediu menos movimento.
  useEffect(() => {
    if (isMobile || reduzMovimento) return;
    const id = setInterval(() => {
      setPagina((p) => (p + 1) % totalPaginas);
    }, 8000);
    return () => clearInterval(id);
  }, [isMobile, reduzMovimento, totalPaginas]);

  // No mobile, sincroniza o scroll horizontal quando a página muda por clique.
  useEffect(() => {
    if (!isMobile || !trackRef.current) return;
    const container = trackRef.current;
    const larguraCard = container.clientWidth * 0.85;
    container.scrollTo({
      left: paginaAtual * larguraCard,
      behavior: reduzMovimento ? "auto" : "smooth",
    });
  }, [paginaAtual, isMobile, reduzMovimento]);

  // No mobile, atualiza os indicadores conforme o usuário arrasta.
  const handleScroll = () => {
    if (!isMobile || !trackRef.current) return;
    const container = trackRef.current;
    const larguraCard = container.clientWidth * 0.85;
    const nova = Math.round(container.scrollLeft / larguraCard);
    if (nova !== paginaAtual && nova >= 0 && nova < totalPaginas) {
      setPagina(nova);
    }
  };

  return (
    <section
      id="servicos"
      className="relative w-full bg-[#121417] py-16 md:py-24 px-4 sm:px-6 border-t border-white/5 z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start max-w-5xl mx-auto w-full">
          <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-white font-serif">
            Soluções <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Ponta a Ponta
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-xl">
            Expertise integrada e rigor técnico em cada etapa do design,
            planejamento e execução da sua obra.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPagina((p) => Math.max(p - 1, 0))}
            className={`w-12 h-12 rounded-full border hidden md:flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24] ${
              paginaAtual === 0
                ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-40"
                : "border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20"
            }`}
            aria-label="Serviços anteriores"
            disabled={paginaAtual === 0}
          >
            &larr;
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="relative w-full overflow-x-auto md:overflow-hidden pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            <div
              className="flex flex-row gap-5 w-full transition-transform duration-700 ease-in-out"
              style={{
                transform: isMobile
                  ? "none"
                  : `translateX(-${paginaAtual * 100}%)`,
              }}
            >
              {servicos.map((servico) => (
                <div
                  key={servico.slug}
                  className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start"
                >
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    {ICONES[servico.icone]}
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      {servico.titulo}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      {servico.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas - 1))}
            className={`w-12 h-12 rounded-full border hidden md:flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24] ${
              paginaAtual >= totalPaginas - 1
                ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-40"
                : "border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20"
            }`}
            aria-label="Próximos serviços"
            disabled={paginaAtual >= totalPaginas - 1}
          >
            &rarr;
          </button>
        </div>

        <div className="flex justify-center items-center gap-2.5 mt-2">
          {Array.from({ length: totalPaginas }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPagina(i)}
              aria-label={`Ir para o grupo de serviços ${i + 1}`}
              aria-current={paginaAtual === i}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a1c24] ${
                paginaAtual === i ? "w-7 bg-[#9a1c24]" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

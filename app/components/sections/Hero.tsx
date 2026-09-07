import Image from "next/image";
import { empresa } from "@/content/empresa";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative h-[90vh] min-h-[580px] w-full flex flex-col justify-between shrink-0 z-30"
    >
      <section className="relative flex-grow flex items-center overflow-hidden w-full pt-13 pb-16">
        <div className="absolute inset-y-0 right-0 z-0 w-full md:w-7/12 h-full">
          <Image
            src="/hero-bg.png"
            alt="Construção Grupo Rocha Construtoras"
            fill
            preload
            sizes="(max-width: 768px) 100vw, 58vw"
            className="object-cover object-right md:object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/80 md:via-[#121417]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start bg-[#121417]/60 md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none backdrop-blur-sm md:backdrop-blur-none transform -translate-y-4">
            <span className="text-[12px] font-semibold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
              {empresa.marca} &bull; {empresa.segmento}
            </span>
            <h1 className="text-3xl sm:text-4xl font-light text-white tracking-wide leading-tight font-serif">
              Elevamos Conforto e <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Sofisticação
              </span>{" "}
              <br />a Novos Patamares.
            </h1>
            <p className="mt-4 text-gray-400 max-w-md text-xs sm:text-sm tracking-wide leading-relaxed">
              Há mais de 20 anos no mercado da construção civil, transformamos
              visões arrojadas em realidade. Nossa trajetória traz a bagagem de
              grandes edifícios e residências de alto padrão.
            </p>
            <div className="mt-6">
              <a
                href="#projetos"
                className="text-[11px] font-medium tracking-widest uppercase bg-[#9a1c24] text-white px-6 py-3 rounded-sm hover:bg-[#80141a] transition-all duration-300 shadow-lg shadow-[#9a1c24]/20 inline-flex items-center gap-3 group"
              >
                Conhecer Portfólio
                <span className="transform group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BARRA DE ESTATÍSTICAS */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] z-40 w-full max-w-5xl px-4 sm:px-6">
        <div className="bg-[#1a1d24] border border-white/10 rounded-sm p-5 md:p-7 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
          {empresa.estatisticas.map((stat, index) => (
            <div
              key={stat.rotulo}
              className={`flex flex-col justify-center py-2 md:py-0${
                index > 0 ? " pt-3 md:pt-0" : ""
              }`}
            >
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
                {stat.valor}
              </span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">
                {stat.rotulo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { equipe } from "@/content/equipe";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative w-full bg-[#f9f6f0] pt-28 pb-24 md:pt-36 md:pb-32 px-6 text-[#121417] z-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="max-w-3xl flex flex-col items-start">
          <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
            Corpo Técnico
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-[#121417] font-serif">
            Os Nomes por Trás da <br />
            <span className="font-semibold text-[#1a1d24]">
              Nossa Excelência
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-xs sm:text-sm tracking-wide leading-relaxed">
            Combinamos rigor analítico de engenharia com a sensibilidade
            estética e inovadora da arquitetura de alto padrão.
          </p>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 items-stretch mt-4 snap-x snap-mandatory pb-4 no-scrollbar">
          {equipe.map((profissional) => (
            <div
              key={profissional.id}
              className="group relative bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-[#9a1c24]/30 min-w-[80vw] sm:min-w-[45vw] lg:min-w-0 snap-start shrink-0"
            >
              <div>
                <div className="relative w-full h-56 overflow-hidden bg-neutral-200">
                  <Image
                    src={profissional.imagem}
                    alt={profissional.nome}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 25vw"
                    className={`object-cover ${profissional.posicao || "object-center"} transition-transform duration-700 ease-in-out transform group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[8px] font-bold tracking-widest text-[#9a1c24] uppercase min-h-[12px] block">
                    {profissional.cargo}
                  </span>
                  <h3 className="font-serif text-lg tracking-wide font-light text-[#121417] mt-1 group-hover:text-[#9a1c24] transition-colors duration-300 line-clamp-1">
                    {profissional.nome}
                  </h3>
                  <div className="w-6 h-[1px] bg-[#c5a880] my-3 transition-all duration-500 group-hover:w-12" />
                  <ul className="space-y-1.5">
                    {profissional.formacao.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[11px] text-gray-600 leading-snug"
                      >
                        <span className="text-[#c5a880] shrink-0">•</span>
                        <span className="line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <div className="flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-gray-400 transition-colors duration-300 group-hover:text-[#9a1c24]">
                  Conectar Perfil
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

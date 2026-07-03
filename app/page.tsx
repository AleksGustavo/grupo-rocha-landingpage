import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121417] flex flex-col selection:bg-[#9a1c24] selection:text-white">
      
      {/* ==========================================
          PRIMEIRA DOBRA: HERO SECTION (FUNDO ESCURO)
          ========================================== */}
      <div id="home" className="relative h-[90vh] min-h-[580px] w-full flex flex-col justify-between shrink-0 z-30">
        
        <section className="relative flex-grow flex items-center overflow-hidden w-full pt-20 pb-16">
          <div className="absolute inset-y-0 right-0 z-0 w-full md:w-7/12 h-full">
            <Image
              src="/hero-bg.png"
              alt="Construção Grupo Rocha Construtoras"
              fill
              priority
              className="object-cover object-right md:object-center select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/80 md:via-[#121417]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-start bg-[#121417]/60 md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <span className="text-[12px] font-semibold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
                Arquitetura que Inspira
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight font-serif">
                Construímos Espaços <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Atemporais
                </span>. <br />
                Feitos Para Si.
              </h1>
              <p className="mt-4 text-gray-400 max-w-md text-xs sm:text-sm tracking-wide leading-relaxed">
                Do conceito à conclusão, moldamos estruturas extraordinárias que elevam a experiência de viver e resistem ao teste do tempo.
              </p>
              <div className="mt-6">
                <button className="text-[11px] font-medium tracking-widest uppercase bg-[#9a1c24] text-white px-6 py-3 rounded-sm hover:bg-[#80141a] transition-all duration-300 shadow-lg shadow-[#9a1c24]/20 flex items-center gap-3 group">
                  Explorar Projetos 
                  <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BARRA DE ESTATÍSTICAS */}
{/* BARRA DE ESTATÍSTICAS AJUSTADA PROPORÇÃO 70/30 */}
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] z-40 w-full max-w-5xl px-4 sm:px-6">
          <div className="bg-[#1a1d24] border border-white/10 rounded-sm p-5 md:p-7 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="flex flex-col justify-center py-2 md:py-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">15+</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Anos de Experiência</span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">320+</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Projetos Concluídos</span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">98%</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Satisfação dos Clientes</span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">25+</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Prêmios do Setor</span>
            </div>
          </div>
        </div>

      </div>

      {/* ==========================================
          SEGUNDA DOBRA: PROJETOS DESTAQUES / SOBRE (CREME CLARO)
          ========================================== */}
      <section id="sobre" className="relative w-full bg-[#f9f6f0] pt-28 pb-24 md:pt-36 md:pb-32 px-6 text-[#121417] z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUNA ESQUERDA: TEXTO INSTITUCIONAL & BOTÃO */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center h-full">
            <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
              Destaques
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-[#121417] font-serif">
              Espaços Que <br />
              Definem A <br />
              <span className="font-semibold text-[#1a1d24]">Excelência</span>
            </h2>
            <p className="mt-4 text-gray-600 text-xs sm:text-sm tracking-wide leading-relaxed max-w-sm">
              Cada estrutura reflete nosso rigor técnico e paixão pelo design atemporal, moldando novos padrões de sofisticação.
            </p>
            
            <div className="mt-8 w-full sm:w-auto">
              <button className="w-full sm:w-auto text-[10px] font-semibold tracking-widest uppercase border border-[#9a1c24] text-[#9a1c24] px-6 py-3 rounded-sm hover:bg-[#9a1c24] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group">
                Ver Todos os Projetos
                <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
            </div>
          </div>

          {/* COLUNA DIREITA: GRID SIMÉTRICO DE 4 IMAGENS */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch min-h-[500px]">
            
            {/* CARD 1 */}
            <div className="sm:col-span-1 relative h-full min-h-[400px] sm:min-h-0 rounded-2xl overflow-hidden shadow-xl group bg-neutral-800">
              <Image
                src="/hero-bg.png" 
                alt="Hotel Class"
                fill
                className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end text-white">
                <div>
                  <h3 className="font-serif text-lg tracking-wide font-light">Hotel Class</h3>
                  <p className="text-[10px] text-gray-300 tracking-wider mt-0.5">Americana, SP</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sm group-hover:bg-[#9a1c24] group-hover:border-[#9a1c24] transition-colors duration-300 cursor-pointer">
                  &rarr;
                </div>
              </div>
            </div>

            {/* COLUNA CENTRAL */}
            <div className="sm:col-span-1 flex flex-col gap-4 h-full">
              
              {/* CARD 2 */}
              <div className="relative flex-1 min-h-[190px] rounded-2xl overflow-hidden shadow-xl group bg-neutral-800">
                <Image
                  src="/predio-foto.png" 
                  alt="Aurora Office Tower"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end text-white">
                  <div>
                    <h3 className="font-serif text-md tracking-wide font-light">Aurora Tower</h3>
                    <p className="text-[10px] text-gray-300 tracking-wider mt-0.5">Araras, SP</p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs group-hover:bg-[#9a1c24] group-hover:border-[#9a1c24] transition-colors duration-300 cursor-pointer">
                    &rarr;
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="relative flex-1 min-h-[190px] rounded-2xl overflow-hidden shadow-xl group bg-neutral-800">
                <Image
                  src="/predio-foto.png" 
                  alt="Edgewood Villa"
                  fill
                  className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end text-white">
                  <div>
                    <h3 className="font-serif text-md tracking-wide font-light">Edgewood Villa</h3>
                    <p className="text-[10px] text-gray-300 tracking-wider mt-0.5">Pirassununga, SP</p>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs group-hover:bg-[#9a1c24] group-hover:border-[#9a1c24] transition-colors duration-300 cursor-pointer">
                    &rarr;
                  </div>
                </div>
              </div>

            </div>

            {/* CARD 4 */}
            <div className="sm:col-span-1 relative h-full min-h-[400px] sm:min-h-0 rounded-2xl overflow-hidden shadow-xl group bg-neutral-800">
              <Image
                src="/predio-foto.png" 
                alt="Maple Street Residences"
                fill
                className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end text-white">
                <div>
                  <h3 className="font-serif text-lg tracking-wide font-light">Maple Residences</h3>
                  <p className="text-[10px] text-gray-300 tracking-wider mt-0.5">Campinas, SP</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sm group-hover:bg-[#9a1c24] group-hover:border-[#9a1c24] transition-colors duration-300 cursor-pointer">
                  &rarr;
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
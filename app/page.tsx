import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121417] flex flex-col selection:bg-[#9a1c24] selection:text-white">
      
{/* ==========================================
          PRIMEIRA DOBRA: HERO SECTION (FUNDO ESCURO)
          ========================================== */}
      <div id="home" className="relative h-[90vh] min-h-[580px] w-full flex flex-col justify-between shrink-0 z-30">
        
        <section className="relative flex-grow flex items-center overflow-hidden w-full pt-13 pb-16">
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
            {/* ADICIONADO A CLASSE -translate-y-4 PARA SUBIR OS TEXTOS EM ~16px */}
            <div className="flex flex-col justify-center items-start bg-[#121417]/60 md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none backdrop-blur-sm md:backdrop-blur-none transform -translate-y-4">
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
                src="/pirassununga-foto.png" 
                alt="Maple Street Residences"
                fill
                className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end text-white">
                <div>
                  <h3 className="font-serif text-lg tracking-wide font-light">Jardins do Bela Vista</h3>
                  <p className="text-[10px] text-gray-300 tracking-wider mt-0.5">Esp. Santo do Pinhal, SP</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-sm group-hover:bg-[#9a1c24] group-hover:border-[#9a1c24] transition-colors duration-300 cursor-pointer">
                  &rarr;
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          TERCEIRA DOBRA: SERVIÇOS (FUNDO ESCURO)
          ========================================== */}
      <section id="servicos" className="relative w-full bg-[#121417] py-24 md:py-32 px-6 border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUNA ESQUERDA: TÍTULO, DESCRIÇÃO E BOTÃO */}
          <div className="lg:col-span-4 flex flex-col items-start justify-center">
            <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-white font-serif">
              Soluções <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Ponta a Ponta
              </span>
            </h2>
            <p className="mt-4 text-gray-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-sm">
              Expertise integrada e rigor técnico em cada etapa do design, planejamento e execução da sua obra.
            </p>
            
            <div className="mt-8 w-full sm:w-auto">
              <button className="w-full sm:w-auto text-[10px] font-semibold tracking-widest uppercase border border-white/20 text-white px-6 py-3 rounded-sm hover:bg-[#9a1c24] hover:border-[#9a1c24] transition-all duration-300 flex items-center justify-center gap-3 group">
                Explorar Serviços
                <span className="transform group-hover:translate-x-1 transition-transform text-[#9a1c24]">&rarr;</span>
              </button>
            </div>
          </div>

          {/* COLUNA DIREITA: GRID DE CARDS VERTICAIS (FIEL À IMAGE_3E3BBF.PNG) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-stretch">
            
            {/* CARD 1: ARQUITETURA */}
{/* CARD 1: ARQUITETURA (Ocupa 2 de 6 colunas no desktop = 1/3 da largura) */}
      <div className="bg-[#1a1d24]/40 border border-white/5 rounded-xl p-8 flex flex-col items-center text-center justify-between min-h-[300px] transition-all duration-300 hover:border-[#9a1c24]/30 hover:bg-[#1a1d24]/80 hover:-translate-y-1 group sm:col-span-1 md:col-span-2">
        <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5-3-3-3 3"/><path d="M12 2v20"/><path d="m5 16 7-9 7 9"/><path d="M19 19H5"/></svg>
        </div>
        <div className="flex flex-col items-center flex-grow justify-center mt-6">
          <h3 className="font-serif text-base tracking-wide font-light text-white mb-3">Arquitetura</h3>
          <p className="text-xs text-gray-400 tracking-wide leading-relaxed">Projetos conceituais que equilibram perfeitamente criatividade e funcionalidade.</p>
        </div>
      </div>

            {/* CARD 2: CONSTRUÇÃO RESIDENCIAL */}
            <div className="bg-[#1a1d24]/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center justify-between min-h-[300px] transition-all duration-300 hover:border-[#9a1c24]/30 hover:bg-[#1a1d24]/80 hover:-translate-y-1 group">
              <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4">
                {/* Ícone de Casa / Residencial */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div className="flex flex-col items-center flex-grow justify-center mt-6">
                <h3 className="font-serif text-md tracking-wide font-light text-white mb-3">Residencial</h3>
                <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed">Casas exclusivas de alto padrão construídas com precisão e cuidado absoluto.</p>
              </div>
            </div>

            {/* CARD 3: EDIFICAÇÕES COMERCIAIS */}
            <div className="bg-[#1a1d24]/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center justify-between min-h-[320px] transition-all duration-300 hover:border-[#9a1c24]/30 hover:bg-[#1a1d24]/80 hover:-translate-y-1 group">
              <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4">
                {/* Ícone de Prédios / Comercial */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="10" height="12" rx="2"/><rect x="12" y="2" width="10" height="20" rx="2"/><path d="M6 14h.01"/><path d="M6 18h.01"/><path d="M16 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 18h.01"/></svg>
              </div>
              <div className="flex flex-col items-center flex-grow justify-center mt-6">
                <h3 className="font-serif text-md tracking-wide font-light text-white mb-3">Comercial</h3>
                <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed">Espaços corporativos de alta performance projetados para negócios modernos.</p>
              </div>
            </div>

            {/* CARD 4: DESIGN DE INTERIORES */}
            <div className="bg-[#1a1d24]/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center justify-between min-h-[320px] transition-all duration-300 hover:border-[#9a1c24]/30 hover:bg-[#1a1d24]/80 hover:-translate-y-1 group">
              <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4">
                {/* Ícone de Poltrona e Luminária / Interiores */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h18"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M12 2v3"/><path d="M6 11v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-7"/><path d="M9 20v2"/><path d="M15 20v2"/></svg>
              </div>
              <div className="flex flex-col items-center flex-grow justify-center mt-6">
                <h3 className="font-serif text-md tracking-wide font-light text-white mb-3">Interiores</h3>
                <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed">Interiores sofisticados, funcionais e totalmente adaptados ao seu estilo de vida.</p>
              </div>
            </div>

            {/* CARD 5: GESTÃO DE PROJETOS */}
            <div className="bg-[#1a1d24]/40 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center justify-between min-h-[320px] transition-all duration-300 hover:border-[#9a1c24]/30 hover:bg-[#1a1d24]/80 hover:-translate-y-1 group">
              <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4">
                {/* Ícone de Prancheta de Métricas / Gestão */}
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
              </div>
              <div className="flex flex-col items-center flex-grow justify-center mt-6">
                <h3 className="font-serif text-md tracking-wide font-light text-white mb-3">Gestão</h3>
                <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed">Execução contínua, do gerenciamento de custos à entrega das chaves.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

interface Artigo {
  id: number;
  destaque?: boolean;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  tempoLeitura: string;
  imagem: string;
}

export default function Home() {
  const [grupoAtivo, setGrupoAtivo] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Efeito para monitorar responsividade de forma segura no Client-Side
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Executa no mount inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efeito para alternar os cards a cada 5 segundos de forma automatizada
  useEffect(() => {
    const interval = setInterval(() => {
      setGrupoAtivo((prev) => {
        const limiteMaximo = isMobile ? 2 : 1;
        return prev >= limiteMaximo ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // ===== LÓGICA DA SEÇÃO INSIGHTS =====
  const categoriasInsights = ["Todos", "Arquitetura", "Construção", "Interiores", "Gestão"];

  const listaArtigos: Artigo[] = [
    {
      id: 1,
      destaque: true,
      categoria: "Arquitetura",
      titulo: "Tendências de Arquitetura Minimalista para Projetos de Alto Padrão",
      resumo: "Descubra como a integração de elementos naturais, iluminação cênica e o conceito 'less is more' estão transformando as fachadas e layouts das residências contemporâneas mais luxuosas.",
      data: "10 Jul, 2026",
      tempoLeitura: "5 min de leitura",
      imagem: "/insight-destaque.jpg",
    },
    {
      id: 2,
      destaque: false,
      categoria: "Gestão",
      titulo: "Como Evitar Desperdícios e Atrasos na Gestão de Obras",
      resumo: "Um guia prático sobre planejamento estratégico, cronogramas inteligentes e escolhas de fornecedores para manter o orçamento sob controle absoluto.",
      data: "08 Jul, 2026",
      tempoLeitura: "4 min de leitura",
      imagem: "/insight-2.jpg",
    },
    {
      id: 3,
      categoria: "Interiores",
      titulo: "Marcenaria Planejada Inteligente: Sofisticação e Otimização",
      resumo: "A fusão perfeita entre estética atemporal e o aproveitamento milimétrico de espaços internos na criação de mobiliários de luxo.",
      data: "05 Jul, 2026",
      tempoLeitura: "6 min de leitura",
      imagem: "/insight-3.jpg",
    },
    {
      id: 4,
      categoria: "Construção",
      titulo: "Sustentabilidade e Tecnologia na Construção Civil Moderna",
      resumo: "Novos materiais, isolamento termoacústico de alta performance e sistemas integrados que valorizam o patrimônio a longo prazo.",
      data: "01 Jul, 2026",
      tempoLeitura: "4 min de leitura",
      imagem: "/insight-4.jpg",
    }
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const artigosFiltrados = useMemo(() => {
    return listaArtigos.filter(artigo =>
      categoriaAtiva === "Todos" ? true : artigo.categoria === categoriaAtiva
    );
  }, [categoriaAtiva]);

  const artigoPrincipal = artigosFiltrados.find(a => a.destaque) || artigosFiltrados[0];
  const demaisArtigos = artigosFiltrados.filter(a => a.id !== artigoPrincipal?.id);

  const limiteAvancar = isMobile ? 2 : 1;

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

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch min-h-[500px]">
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

            <div className="sm:col-span-1 flex flex-col gap-4 h-full">
              <div className="relative flex-1 min-h-[190px] rounded-2xl overflow-hidden shadow-xl group bg-neutral-800">
                <Image
                  src="/hero-bg.png" 
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

              <div className="relative flex-1 min-h-[190px] rounded-2xl overflow-hidden shadow-xl group bg-neutral-800">
                <Image
                  src="/hero-bg.png" 
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
          TERCEIRA DOBRA: SERVIÇOS (SLIDER DINÂMICO ADAPTATIVO 6 CARDS)
          ========================================== */}
      <section id="servicos" className="relative w-full bg-[#121417] py-12 md:py-20 px-4 sm:px-6 border-t border-white/5 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
          
          {/* CABEÇALHO DA SEÇÃO */}
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
              Expertise integrada e rigor técnico em cada etapa do design, planejamento e execução da sua obra.
            </p>
          </div>

          {/* CONTROLLER LATERAL E CONTAINER DOS CARDS INTEGRADOS */}
          <div className="relative flex items-center justify-between gap-2 sm:gap-4 w-full max-w-5xl mx-auto">
            
            {/* BOTÃO VOLTAR */}
            <button 
              onClick={() => setGrupoAtivo((prev) => (prev > 0 ? prev - 1 : 0))}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 ${
                grupoAtivo === 0 
                  ? 'border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-50' 
                  : 'border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20'
              }`}
              aria-label="Voltar serviços"
              disabled={grupoAtivo === 0}
            >
              &larr;
            </button>

            {/* AREA CENTRAL DO CARROSSEL */}
            <div className="relative flex-grow min-h-[290px] sm:min-h-[320px] md:min-h-[360px]">
              
              {/* GRUPO 1: CARDS 1 e 2 (Mobile) / CARDS 1, 2 e 3 (Desktop) */}
              <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 items-stretch absolute inset-0 w-full transition-all duration-700 ease-in-out ${
                grupoAtivo === 0 ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none -translate-x-8'
              }`}>
                {/* CARD 1: ARQUITETURA */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-4 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 hover:-translate-y-1 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 5-3-3-3 3"/><path d="M12 2v20"/><path d="m5 16 7-9 7 9"/><path d="M19 19H5"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-3">
                    <h3 className="font-serif text-sm sm:text-xl md:text-2xl tracking-wide font-light text-white mb-1.5">Arquitetura</h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3 md:line-clamp-none">Projetos conceituais que equilibram perfeitamente criatividade e funcionalidade.</p>
                  </div>
                </div>

                {/* CARD 2: CONSTRUÇÃO RESIDENCIAL */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-4 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 hover:-translate-y-1 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-3">
                    <h3 className="font-serif text-sm sm:text-xl md:text-2xl tracking-wide font-light text-white mb-1.5">Residencial</h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3 md:line-clamp-none">Casas exclusivas de alto padrão construídas com precisão e cuidado absoluto.</p>
                  </div>
                </div>

                {/* CARD 3: EDIFICAÇÕES COMERCIAIS */}
                <div className="hidden md:flex bg-[#1a1d24]/40 border border-white/20 rounded-xl p-8 flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 hover:-translate-y-1 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="10" height="12" rx="2"/><rect x="12" y="2" width="10" height="20" rx="2"/><path d="M6 14h.01"/><path d="M6 18h.01"/><path d="M16 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 18h.01"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-6">
                    <h3 className="font-serif text-xl md:text-2xl tracking-wide font-light text-white mb-3">Comercial</h3>
                    <p className="text-sm md:text-base text-gray-400 tracking-wide leading-relaxed">Espaços corporativos e comerciais de alta performance projetados para negócios.</p>
                  </div>
                </div>
              </div>

              {/* GRUPO 2: CARDS 3 e 4 (Mobile) / CARDS 4, 5 e 6 (Desktop) */}
              <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 items-stretch absolute inset-0 w-full transition-all duration-700 ease-in-out ${
                grupoAtivo === 1 ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none ' + (grupoAtivo > 1 ? '-translate-x-8' : 'translate-x-8')
              }`}>
                {/* CARD 3 (REPETIDO APENAS NO MOBILE) */}
                <div className="flex md:hidden bg-[#1a1d24]/40 border border-white/20 rounded-xl p-4 flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="10" height="12" rx="2"/><rect x="12" y="2" width="10" height="20" rx="2"/><path d="M6 14h.01"/><path d="M6 18h.01"/><path d="M16 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 18h.01"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-3">
                    <h3 className="font-serif text-sm tracking-wide font-light text-white mb-1.5">Comercial</h3>
                    <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed line-clamp-3">Espaços corporativos e comerciais de alta performance projetados para negócios.</p>
                  </div>
                </div>

                {/* CARD 4: DESIGN DE INTERIORES */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-4 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 hover:-translate-y-1 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-11 sm:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h18"/><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M12 2v3"/><path d="M6 11v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-7"/><path d="M9 20v2"/><path d="M15 20v2"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-3">
                    <h3 className="font-serif text-sm sm:text-xl md:text-2xl tracking-wide font-light text-white mb-1.5">Interiores</h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3 md:line-clamp-none">Interiores sofisticados, marcenaria e detalhamento adaptados ao seu bem-estar.</p>
                  </div>
                </div>

                {/* CARD 5: GESTÃO E GERENCIAMENTO */}
                <div className="hidden md:flex bg-[#1a1d24]/40 border border-white/20 rounded-xl p-8 flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 hover:-translate-y-1 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-6">
                    <h3 className="font-serif text-xl md:text-2xl tracking-wide font-light text-white mb-3">Gestão de Obras</h3>
                    <p className="text-sm md:text-base text-gray-400 tracking-wide leading-relaxed">Execução contínua e transparente, cuidando dos custos até a entrega das chaves.</p>
                  </div>
                </div>

                {/* CARD 6: CONSULTORIA TÉCNICA */}
                <div className="hidden md:flex bg-[#1a1d24]/40 border border-white/20 rounded-xl p-8 flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 hover:-translate-y-1 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-4 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-6">
                    <h3 className="font-serif text-xl md:text-2xl tracking-wide font-light text-white mb-3">Consultoria</h3>
                    <p className="text-sm md:text-base text-gray-400 tracking-wide leading-relaxed">Estudos de viabilidade técnica, laudos estruturais e análises patrimoniais.</p>
                  </div>
                </div>
              </div>

              {/* GRUPO 3: CARDS 5 e 6 (EXCLUSIVO MOBILE) */}
              <div className={`grid grid-cols-2 md:hidden gap-3 items-stretch absolute inset-0 w-full transition-all duration-700 ease-in-out ${
                grupoAtivo === 2 ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-8'
              }`}>
                {/* CARD 5 NO MOBILE */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-4 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-3">
                    <h3 className="font-serif text-sm tracking-wide font-light text-white mb-1.5">Gestão de Obras</h3>
                    <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed line-clamp-3">Execução contínua e transparente, cuidando dos custos até a entrega das chaves.</p>
                  </div>
                </div>

                {/* CARD 6 NO MOBILE */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-4 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 group cursor-pointer">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-3">
                    <h3 className="font-serif text-sm tracking-wide font-light text-white mb-1.5">Consultoria</h3>
                    <p className="text-[11px] text-gray-400 tracking-wide leading-relaxed line-clamp-3">Estudos de viabilidade técnica, laudos estruturais e análises patrimoniais.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTÃO AVANÇAR */}
            <button 
              onClick={() => setGrupoAtivo((prev) => (prev < limiteAvancar ? prev + 1 : prev))}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 ${
                grupoAtivo === limiteAvancar
                  ? 'border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-50' 
                  : 'border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20'
              }`}
              aria-label="Próximos serviços"
              disabled={grupoAtivo === limiteAvancar}
            >
              &rarr;
            </button>

          </div>

          {/* INDICADORES INFERIORES ADAPTATIVOS */}
          <div className="flex justify-center items-center gap-2 mt-2">
            <button onClick={() => setGrupoAtivo(0)} className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 0 ? 'w-6 bg-[#9a1c24]' : 'w-2 bg-white/20'}`} />
            <button onClick={() => setGrupoAtivo(1)} className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 1 ? 'w-6 bg-[#9a1c24]' : 'w-2 bg-white/20'}`} />
            <button onClick={() => setGrupoAtivo(2)} className={`md:hidden h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 2 ? 'w-6 bg-[#9a1c24]' : 'w-2 bg-white/20'}`} />
          </div>

        </div>
      </section>

      {/* ==========================================
          QUARTA DOBRA: PROJETOS & PROCESSO (CREME CLARO)
          ========================================== */}
      <section id="projetos" className="relative w-full bg-[#f9f6f0] py-20 md:py-24 px-6 text-[#121417] z-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          
          {/* PARTE 1: ABAS / GALERIA DE PROJETOS COMPLETA */}
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
              
              {/* Filtros decorativos */}
              <div className="flex flex-wrap gap-2 text-[11px] font-medium tracking-widest uppercase text-gray-500">
                <span className="px-4 py-2 bg-[#121417] text-white rounded-sm cursor-pointer">Todos</span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">Residencial</span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">Corporativo</span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">Interiores</span>
              </div>
            </div>

            {/* Grid de Projetos do Portfólio */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Projeto 1 */}
              <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800">
                <Image 
                  src="/hero-bg.png" 
                  alt="Residência Alphaville" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-6 text-white z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Alto Padrão</span>
                  <h3 className="font-serif text-xl font-light mt-1">Residência Alphaville</h3>
                  <p className="text-xs text-gray-300 mt-1">Leme, SP</p>
                </div>
              </div>

              {/* Projeto 2 */}
              <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800">
                <Image 
                  src="/pirassununga-foto.png" 
                  alt="Corporate Tower" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-6 text-white z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Comercial</span>
                  <h3 className="font-serif text-xl font-light mt-1">Corporate Tower</h3>
                  <p className="text-xs text-gray-300 mt-1">Campinas, SP</p>
                </div>
              </div>

              {/* Projeto 3 */}
              <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800">
                <Image 
                  src="/hero-bg.png" 
                  alt="Loft Integrado" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-6 text-white z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Interiores</span>
                  <h3 className="font-serif text-xl font-light mt-1">Loft Integrado</h3>
                  <p className="text-xs text-gray-300 mt-1">Araras, SP</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-black/5" />

          {/* PARTE 2: NOSSO PROCESSO */}
          <div className="flex flex-col gap-12 pt-4">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4 inline-block md:inline">
                Metodologia
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-[#121417] font-serif mt-2">
                Uma Jornada Contínua <br className="hidden md:block"/>
                <span className="font-semibold text-[#1a1d24]">Do Conceito à Realidade</span>
              </h2>
            </div>

            {/* Linha do Tempo Estilizada */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              
              {/* Passo 01 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  01
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">Alinhamento</h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Entendemos suas necessidades, objetivos de investimento, prazos e expectativas iniciais.
                </p>
              </div>

              {/* Passo 02 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  02
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">Estudo Técnico</h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Análise rigorosa de viabilidade, topografia e adequações legais estruturadas milimetricamente.
                </p>
              </div>

              {/* Passo 03 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  03
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">Engenharia Fina</h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Desenvolvimento do design executivo cruzando estética arquitetônica e soluções de alta performance.
                </p>
              </div>

              {/* Passo 04 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  04
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">Construção Ativa</h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Execução de obra com fiscalização rígida de materiais, gestão de custos e cronograma transparente.
                </p>
              </div>

              {/* Passo 05 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  05
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">Entrega de Chaves</h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Inspeção minuciosa de acabamentos e validação de engenharia com garantia de pós-entrega diferenciada.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          QUINTA DOBRA: INSIGHTS & TENDÊNCIAS 
          ========================================== */}
      <section id="insights" className="relative w-full bg-[#121417] py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-white/5 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
          
          {/* CABEÇALHO DA SEÇÃO */}
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
              <p className="mt-3 text-gray-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-lg">
                Artigos, análises exclusivas e novidades sobre o universo da arquitetura, engenharia e design de interiores de alto padrão.
              </p>
            </div>
          </div>

          {/* BARRA DE FILTROS POR CATEGORIA */}
          <div className="max-w-5xl mx-auto w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 pb-2 border-b border-white/5">
            {categoriasInsights.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 border ${
                  categoriaAtiva === cat
                    ? "bg-[#9a1c24] border-[#9a1c24] text-white shadow-md shadow-[#9a1c24]/10"
                    : "bg-[#1a1d24]/40 border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* CONTEÚDO PRINCIPAL */}
          <div className="max-w-5xl mx-auto w-full flex flex-col gap-8 md:gap-12">
            
            {/* CARD EM DESTAQUE */}
            {artigoPrincipal && (
              <div className="group relative w-full bg-[#1a1d24]/30 border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:border-[#9a1c24]/50 cursor-pointer">
                <div className="relative w-full md:w-1/2 h-56 sm:h-72 md:h-auto min-h-[260px] overflow-hidden bg-gray-900 shrink-0">
                  <Image 
                    src={artigoPrincipal.imagem} 
                    alt={artigoPrincipal.titulo}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#121417]/80 via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-40" />
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
                    <p className="text-gray-400 text-xs sm:text-sm tracking-wide leading-relaxed line-clamp-3 md:line-clamp-4">
                      {artigoPrincipal.resumo}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#9a1c24] transition-colors duration-300 mt-2">
                    Ler artigo completo <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            )}

            {/* DEMAIS ARTIGOS (GRID) */}
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
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-20 bg-white/10 backdrop-blur-md text-white text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded border border-white/10">
                        {artigo.categoria}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#9a1c24]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                        <p className="text-gray-400 text-xs tracking-wide leading-relaxed line-clamp-2 sm:line-clamp-3">
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
                <p className="text-sm text-gray-500 tracking-wide">Nenhum insight publicado nesta categoria ainda.</p>
              </div>
            )}

          </div>
        </div>

        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

    </div>
  );
}
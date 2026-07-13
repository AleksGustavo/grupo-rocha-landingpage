"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";

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

interface Profissional {
  id: number;
  nome: string;
  cargo: string;
  formacao: string[];
  imagem: string;
  posicao?: string;
}

export default function Home() {
  const [grupoAtivo, setGrupoAtivo] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Efeito para monitorar responsividade de forma segura no Client-Side
useEffect(() => {
  const container = scrollContainerRef.current;
  if (!container) return;

  const autoScroll = setInterval(() => {
    const isEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
    
    if (isEnd) {
      // Se chegou no fim, volta calmamente ao início
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Avança proporcionalmente ao tamanho visível da tela (funciona perfeitamente em mobile e desktop)
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, 5000); // 5000ms = 5 segundos de exibição por bloco

  return () => clearInterval(autoScroll);
}, []);

  // Efeito para alternar os cards a cada 8 segundos de forma automatizada (Aumentado conforme solicitado)
  useEffect(() => {
    if (isMobile) return; // No mobile o usuário arrasta com o dedo, removemos o autoplay para não atrapalhar

    const interval = setInterval(() => {
      setGrupoAtivo((prev) => {
        return prev >= 1 ? 0 : prev + 1;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Sincroniza o scroll do mobile quando o grupoAtivo mudar pelos indicadores
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth * 0.85; // Correspondente ao min-w-[85vw]
      container.scrollTo({
        left: grupoAtivo * cardWidth,
        behavior: "smooth",
      });
    }
  }, [grupoAtivo, isMobile]);

  // Captura o scroll manual do usuário no mobile para atualizar as bolinhas (indicadores)
  const handleScroll = () => {
    if (!isMobile || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth * 0.85;
    const novoGrupo = Math.round(container.scrollLeft / cardWidth);
    if (novoGrupo !== grupoAtivo && novoGrupo <= 2) {
      setGrupoAtivo(novoGrupo);
    }
  };

  // ===== DADOS DOS PROFISSIONAIS =====
  const equipe: Profissional[] = [
    {
      id: 1,
      nome: "Eng. Ricardo Rocha",
      cargo: "Diretor de Engenharia & Fundador",
      formacao: [
        "Engenharia Civil (USP)",
        "Especialista em Estruturas",
        "MBA em Gestão de Obras",
      ],
      imagem: "/ricardo.jpg",
      posicao: "object-center",
    },
    {
      id: 2,
      nome: "Arq. Mariana Concreto",
      cargo: "Diretora de Arquitetura",
      formacao: [
        "Arquitetura e Urbanismo (FAU-USP)",
        "Mestrado em Design (Milão)",
        "Certificação Sustentável",
      ],
      imagem: "/mariana.jpg",
      posicao: "object-top",
    },
    {
      id: 3,
      nome: "Eng. Carlos Eduardo",
      cargo: "Head de Operações & Infraestrutura",
      formacao: [
        "Engenharia Civil (Unicamp)",
        "Gestão de Projetos Complexos",
        "Especialista em Lean Construction",
      ],
      imagem: "/carlos.jpg",
      posicao: "object-top",
    },
    {
      id: 4,
      nome: "Arq. Beatriz Siqueira",
      cargo: "Coordenadora de Interiores de Luxo",
      formacao: [
        "Arquitetura e Urbanismo (Mackenzie)",
        "Design de Interiores (NYFA)",
        "Consultoria de Marcenaria Fina",
      ],
      imagem: "/beatriz.jpg",
      posicao: "object-top",
    },
  ];

  // ===== LÓGICA DA SEÇÃO INSIGHTS =====
  const categoriasInsights = [
    "Todos",
    "Arquitetura",
    "Construção",
    "Interiores",
    "Gestão",
  ];

  const listaArtigos: Artigo[] = [
    {
      id: 1,
      destaque: true,
      categoria: "Arquitetura",
      titulo: "Tendências de Arquitetura Minimalista para Projetos de Alto Padrão",
      resumo: "Descubra como a integração de elements naturais, iluminação cênica e o conceito 'less is more' estão transformando as fachadas e layouts das residências contemporâneas mais luxuosas.",
      data: "10 Jul, 2026",
      tempoLeitura: "5 min de leitura",
      imagem: "/minimalista.jpg",
    },
    {
      id: 2,
      destaque: false,
      categoria: "Gestão",
      titulo: "Como Evitar Desperdícios e Atrasos na Gestão de Obras",
      resumo: "Um guia prático sobre planejamento estratégico, cronogramas inteligentes e escolhas de fornecedores para manter o orçamento controle absoluto.",
      data: "08 Jul, 2026",
      tempoLeitura: "4 min de leitura",
      imagem: "/obras.jpg",
    },
    {
      id: 3,
      categoria: "Interiores",
      titulo: "Marcenaria Planejada Inteligente: Sofisticação e Otimização",
      resumo: "A fusão perfeita entre estética atemporal e o aproveitamento milimétrico de espaços internos na criação de mobiliários de luxo.",
      data: "05 Jul, 2026",
      tempoLeitura: "6 min de leitura",
      imagem: "/interiores.jpg",
    },
    {
      id: 4,
      categoria: "Construção",
      titulo: "Sustentabilidade e Tecnologia na Construção Civil Moderna",
      resumo: "Novos materiais, isolamento termoacústico de alta performance e sistemas integrados que valorizam o patrimônio a longo prazo.",
      data: "01 Jul, 2026",
      tempoLeitura: "4 min de leitura",
      imagem: "/sustentabilidade.jpg",
    },
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const artigosFiltrados = useMemo(() => {
    return listaArtigos.filter((artigo) =>
      categoriaAtiva === "Todos" ? true : artigo.categoria === categoriaAtiva,
    );
  }, [categoriaAtiva]);

  const artigoPrincipal = artigosFiltrados.find((a) => a.destaque) || artigosFiltrados[0];
  const demaisArtigos = artigosFiltrados.filter((a) => a.id !== artigoPrincipal?.id);

  return (
    <div className="min-h-screen bg-[#121417] flex flex-col selection:bg-[#9a1c24] selection:text-white">
      {/* ==========================================
          PRIMEIRA DOBRA: HERO SECTION
          ========================================== */}
      <div id="home" className="relative h-[90vh] min-h-[580px] w-full flex flex-col justify-between shrink-0 z-30">
        <section className="relative flex-grow flex items-center overflow-hidden w-full pt-13 pb-16">
          <div className="absolute inset-y-0 right-0 z-0 w-full md:w-7/12 h-full">
            <Image
              src="/hero-bg.png"
              alt="Construção Grupo Rocha Construtoras"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-right md:object-center select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/80 md:via-[#121417]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-start bg-[#121417]/60 md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none backdrop-blur-sm md:backdrop-blur-none transform -translate-y-4">
              <span className="text-[12px] font-semibold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
                Rocha e Concreto &bull; Arquitetura e Construção
              </span>
              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-wide leading-tight font-serif">
                Elevamos Conforto e <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Sofisticação
                </span>{" "}
                <br />a Novos Patamares.
              </h1>
              <p className="mt-4 text-gray-400 max-w-md text-xs sm:text-sm tracking-wide leading-relaxed">
                Há mais de 20 years no mercado da construção civil, transformamos visões arrojadas em reality. Nossa trajetória traz a bagagem de grandes edifícios e residências de alto padrão.
              </p>
              <div className="mt-6">
                <button className="text-[11px] font-medium tracking-widest uppercase bg-[#9a1c24] text-white px-6 py-3 rounded-sm hover:bg-[#80141a] transition-all duration-300 shadow-lg shadow-[#9a1c24]/20 flex items-center gap-3 group">
                  Conhecer Portfólio
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
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">20+</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Anos de Experiência</span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">65k+ m²</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Área Construída</span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">100%</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Projetos Bem Executados</span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">Alto Padrão</span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">Em Cada Detalhe</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SEGUNDA DOBRA: SOBRE / OS RESPONSÁVEIS
          ========================================== */}
      <section id="sobre" className="relative w-full bg-[#f9f6f0] pt-28 pb-24 md:pt-36 md:pb-32 px-6 text-[#121417] z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="max-w-3xl flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
              Corpo Técnico
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-[#121417] font-serif">
              Os Nomes por Trás da <br />
              <span className="font-semibold text-[#1a1d24]">Nossa Excelência</span>
            </h2>
            <p className="mt-4 text-gray-600 text-xs sm:text-sm tracking-wide leading-relaxed">
              Combinamos rigor analítico de engenharia com a sensibilidade estética e inovadora da arquitetura de alto padrão.
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
                        <li key={index} className="flex items-start gap-2 text-[11px] text-gray-600 leading-snug">
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
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TERCEIRA DOBRA: SERVIÇOS (CORRIGIDA)
          ========================================== */}
      <section id="servicos" className="relative w-full bg-[#121417] py-16 md:py-24 px-4 sm:px-6 border-t border-white/5 z-10 overflow-hidden">
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

          {/* CARROSSEL ADAPTATIVO */}
          <div className="relative w-full max-w-5xl mx-auto flex items-center gap-4">
            
            {/* BOTÃO VOLTAR (SÓ PARA DESKTOP) */}
            <button
              onClick={() => setGrupoAtivo((prev) => (prev > 0 ? prev - 1 : 0))}
              className={`w-12 h-12 rounded-full border hidden md:flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 ${
                grupoAtivo === 0
                  ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-40"
                  : "border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20"
              }`}
              aria-label="Voltar serviços"
              disabled={grupoAtivo === 0}
            >
              &larr;
            </button>

            {/* ÁREA MÓVEL E DESKTOP INTEGRADAS COM SUPORTE A SWIPE (TOUCH) */}
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="relative w-full overflow-x-auto md:overflow-hidden pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
              {/* CONTAINER COM TRANSLATE APENAS NO DESKTOP PARA NÃO QUEBRAR O ARRASTE DO MOUSE/DEDO NO MOBILE */}
              <div
                className="flex flex-row gap-5 w-full transition-transform duration-700 ease-in-out"
                style={{ transform: !isMobile ? `translateX(-${grupoAtivo * 100}%)` : "none" }}
              >
                
                {/* CARD 1: ARQUITETURA */}
                <div className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 5-3-3-3 3" /><path d="M12 2v20" /><path d="m5 16 7-9 7 9" /><path d="M19 19H5" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">Arquitetura</h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">Projetos conceituais que equilibram perfeitamente criatividade e funcionalidade.</p>
                  </div>
                </div>

                {/* CARD 2: RESIDENCIAL */}
                <div className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">Residencial</h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">Casas exclusivas de alto padrão construídas com precisão e cuidado absoluto.</p>
                  </div>
                </div>

                {/* CARD 3: COMERCIAL */}
                <div className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="10" width="10" height="12" rx="2" /><rect x="12" y="2" width="10" height="20" rx="2" /><path d="M6 14h.01" /><path d="M6 18h.01" /><path d="M16 6h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M16 18h.01" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">Comercial</h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">Espaços corporativos e comerciais de alta performance projetados para negócios.</p>
                  </div>
                </div>

                {/* CARD 4: INTERIORES */}
                <div className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11h18" /><path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" /><path d="M12 2v3" /><path d="M6 11v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-7" /><path d="M9 20v2" /><path d="M15 20v2" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">Interiores</h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">Interiores sofisticados, marcenaria e detalhamento adaptados ao seu bem-estar.</p>
                  </div>
                </div>

                {/* CARD 5: GESTÃO DE OBRAS */}
                <div className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M9 12h6" /><path d="M9 16h6" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">Gestão de Obras</h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">Execução contínua e transparente, cuidando dos custos até a entrega das chaves.</p>
                  </div>
                </div>

                {/* CARD 6: CONSULTORIA */}
                <div className="bg-[#1a1d24]/40 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer min-w-[85vw] md:min-w-[calc((100%-2.5rem)/3)] w-[85vw] md:w-[calc((100%-2.5rem)/3)] shrink-0 snap-start">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 md:w-11 md:h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-5">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">Consultoria</h3>
                    <p className="text-xs md:text-sm text-gray-400 tracking-wide leading-relaxed line-clamp-3">Estudos de viabilidade técnica, laudos estruturais e análises patrimoniais.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* BOTÃO AVANÇAR (SÓ PARA DESKTOP) */}
            <button
              onClick={() => setGrupoAtivo((prev) => (prev < 1 ? prev + 1 : 1))}
              className={`w-12 h-12 rounded-full border hidden md:flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 ${
                grupoAtivo === 1
                  ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-40"
                  : "border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20"
              }`}
              aria-label="Próximos serviços"
              disabled={grupoAtivo === 1}
            >
              &rarr;
            </button>
          </div>

          {/* INDICADORES INFERIORES ADAPTATIVOS */}
          <div className="flex justify-center items-center gap-2.5 mt-2">
            <button
              onClick={() => setGrupoAtivo(0)}
              className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 0 ? "w-7 bg-[#9a1c24]" : "w-2 bg-white/20"}`}
            />
            <button
              onClick={() => setGrupoAtivo(1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 1 ? "w-7 bg-[#9a1c24]" : "w-2 bg-white/20"}`}
            />
            {isMobile && (
              <button
                onClick={() => setGrupoAtivo(2)}
                className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 2 ? "w-7 bg-[#9a1c24]" : "w-2 bg-white/20"}`}
              />
            )}
          </div>
        </div>
      </section>

{/* ==========================================
          QUARTA DOBRA: PROJETOS
          ========================================== */}
      <section id="projetos" className="relative w-full bg-[#f9f6f0] py-20 md:py-24 px-6 text-[#121417] z-10 border-t border-black/5">
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
                <span className="px-4 py-2 bg-[#121417] text-white rounded-sm cursor-pointer">Todos</span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">Residencial</span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">Corporativo</span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">Interiores</span>
              </div>
            </div>

            {/* CONTÊINER COM OS BOTÕES LATERAIS E CARROSSEL */}
            <div className="relative w-full flex items-center gap-4">
              
              {/* BOTÃO VOLTAR (APENAS DESKTOP) */}
              <button
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
                  }
                }}
                className="w-12 h-12 rounded-full border border-black/10 bg-white text-[#121417] hover:bg-[#9a1c24] hover:text-white hover:border-[#9a1c24] shadow-md hidden md:flex items-center justify-center transition-all duration-300 shrink-0 z-20"
                aria-label="Voltar obras"
              >
                &larr;
              </button>

              {/* CONTAINER DOS CARDS (Transicionado para Flex dinâmico em todas as telas) */}
              <div 
                ref={scrollContainerRef}
                className="w-full overflow-x-auto flex gap-6 md:gap-8 snap-x snap-mandatory pb-4 md:pb-2 no-scrollbar scroll-smooth"
              >
                {/* CARD 1 */}
                <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 min-w-[85vw] md:min-w-[calc(33.333%-22px)] snap-start shrink-0">
                  <Image src="/hero-bg.png" alt="Residência Alphaville" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Alto Padrão</span>
                    <h3 className="font-serif text-xl font-light mt-1">Residência Alphaville</h3>
                    <p className="text-xs text-gray-300 mt-1">Leme, SP</p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 min-w-[85vw] md:min-w-[calc(33.333%-22px)] snap-start shrink-0">
                  <Image src="/pirassununga-foto.png" alt="Corporate Tower" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Comercial</span>
                    <h3 className="font-serif text-xl font-light mt-1">Corporate Tower</h3>
                    <p className="text-xs text-gray-300 mt-1">Campinas, SP</p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 min-w-[85vw] md:min-w-[calc(33.333%-22px)] snap-start shrink-0">
                  <Image src="/hero-bg.png" alt="Loft Integrado" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Interiores</span>
                    <h3 className="font-serif text-xl font-light mt-1">Loft Integrado</h3>
                    <p className="text-xs text-gray-300 mt-1">Araras, SP</p>
                  </div>
                </div>

                {/* CARD 4 (Novo card para transição) */}
                <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 min-w-[85vw] md:min-w-[calc(33.333%-22px)] snap-start shrink-0">
                  <Image src="/pirassununga-foto.png" alt="Residência Conceito" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Alto Padrão</span>
                    <h3 className="font-serif text-xl font-light mt-1">Residência Conceito</h3>
                    <p className="text-xs text-gray-300 mt-1">Pirassununga, SP</p>
                  </div>
                </div>

                {/* CARD 5 (Novo card para transição) */}
                <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800 min-w-[85vw] md:min-w-[calc(33.333%-22px)] snap-start shrink-0">
                  <Image src="/hero-bg.png" alt="Escritório Executive" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative p-6 text-white z-10">
                    <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">Corporativo</span>
                    <h3 className="font-serif text-xl font-light mt-1">Escritório Executive</h3>
                    <p className="text-xs text-gray-300 mt-1">Campinas, SP</p>
                  </div>
                </div>

              </div>

              {/* BOTÃO AVANÇAR (APENAS DESKTOP) */}
              <button
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
                  }
                }}
                className="w-12 h-12 rounded-full border border-black/10 bg-white text-[#121417] hover:bg-[#9a1c24] hover:text-white hover:border-[#9a1c24] shadow-md hidden md:flex items-center justify-center transition-all duration-300 shrink-0 z-20"
                aria-label="Avançar obras"
              >
                &rarr;
              </button>
            </div>
          </div>

{/* BOTÃO CENTRALIZADO PARA VER TODAS AS OBRAS */}
          <div className="flex justify-center mt-4">
            <a 
              href="/portfolio" 
              className="text-[11px] font-medium tracking-widest uppercase bg-[#121417] text-white px-8 py-4 rounded-sm hover:bg-[#9a1c24] transition-all duration-300 shadow-md flex items-center gap-3 group"
            >
              Visualizar Todas as Obras
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          QUINTA DOBRA: INSIGHTS & TENDÊNCIAS
          ========================================== */}
      <section id="insights" className="relative w-full bg-[#121417] py-16 md:py-24 px-4 sm:px-6 md:px-8 border-t border-white/5 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto w-full">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
                Nosso Conhecimento
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-white font-serif">
                Insights & <br />
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Tendências</span>
              </h2>
            </div>
          </div>

          <div className="max-w-5xl mx-auto w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center gap-2 pb-2 border-b border-white/5">
            {categoriasInsights.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 border ${
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
                  <Image src={artigoPrincipal.imagem} alt={artigoPrincipal.titulo} fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
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
                    Ler artigo completo <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            )}

            {demaisArtigos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {demaisArtigos.map((artigo) => (
                  <div key={artigo.id} className="group bg-[#1a1d24]/20 border border-white/5 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-[#1a1d24]/40 cursor-pointer">
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-900">
                      <Image src={artigo.imagem} alt={artigo.titulo} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
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

      {/* ==========================================
          SEXTA DOBRA: CONTATO (TOTALMENTE RESPONSIVO)
          ========================================== */}
      <section id="contato" className="relative w-full bg-[#f9f6f0] py-20 md:py-28 px-4 sm:px-6 md:px-8 z-10 text-[#121417]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* COLUNA ESQUERDA: INFORMAÇÕES DE CONTATO (4/12) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-widest text-[#9a1c24] uppercase border-l-2 border-[#9a1c24] pl-3 mb-4">
                Atendimento Exclusivo
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-wide leading-tight text-[#121417] font-serif">
                Inicie Seu <br />
                <span className="font-semibold text-[#1a1d24]">Novo Projeto</span>
              </h2>
              <p className="mt-4 text-gray-600 text-xs sm:text-sm tracking-wide leading-relaxed max-w-md">
                Seja para uma residência de alto padrão, um espaço corporativo ou uma consultoria técnica especializada, nossa equipe está pronta para materializar o seu legado.
              </p>
            </div>

            {/* BLOCOS DE INFORMAÇÕES */}
            <div className="flex flex-col gap-6 my-4">
              {/* Telefone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121417] flex items-center justify-center text-white shrink-0 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#c5a880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Telefone & Whatsapp</h4>
                  <p className="text-sm font-semibold text-[#121417] mt-0.5 hover:text-[#9a1c24] transition-colors">
                    <a href="https://wa.me/5519999999999" target="_blank" rel="noopener noreferrer">+55 (19) 99999-9999</a>
                  </p>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121417] flex items-center justify-center text-white shrink-0 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#c5a880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">E-mail Corporativo</h4>
                  <p className="text-sm font-semibold text-[#121417] mt-0.5 hover:text-[#9a1c24] transition-colors">
                    <a href="mailto:contato@rochaconcreto.com.br">contato@rochaconcreto.com.br</a>
                  </p>
                </div>
              </div>

              {/* Endereço Físico */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121417] flex items-center justify-center text-white shrink-0 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#c5a880]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">Escritório Central</h4>
                  <p className="text-sm font-semibold text-[#121417] mt-0.5 leading-relaxed">
                    Av. 29 de Agosto, 1000 — Centro<br />
                    Leme, SP — CEP 13610-210
                  </p>
                </div>
              </div>
            </div>

            {/* HORÁRIO DE ATENDIMENTO */}
            <div className="border-t border-black/5 pt-6 hidden lg:block">
              <span className="text-[9px] font-bold tracking-widest uppercase text-gray-400">Horário de Funcionamento</span>
              <p className="text-xs text-gray-600 mt-1">Segunda a Sexta: 08h às 18h &bull; Sábados: Com agendamento prévio</p>
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO DE CONTATO (7/12) */}
          <div className="lg:col-span-7 bg-white border border-black/5 rounded-2xl p-6 sm:p-10 shadow-xl">
            <form onSubmit={(e) => { e.preventDefault(); alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve."); }} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Campo: Nome */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="nome" 
                    required 
                    placeholder="Ex: Aleksander Assis" 
                    className="bg-neutral-50 border border-black/10 text-[#121417] placeholder:text-gray-400 text-xs sm:text-sm rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#9a1c24] focus:ring-1 focus:ring-[#9a1c24] transition-all"
                  />
                </div>

                {/* Campo: E-mail */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-widest uppercase text-gray-500">E-mail de Contato *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="Ex: seuemail@dominio.com" 
                    className="bg-neutral-50 border border-black/10 text-[#121417] placeholder:text-gray-400 text-xs sm:text-sm rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#9a1c24] focus:ring-1 focus:ring-[#9a1c24] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Campo: Telefone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tel" className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="tel" 
                    placeholder="Ex: (19) 99999-9999" 
                    className="bg-neutral-50 border border-black/10 text-[#121417] placeholder:text-gray-400 text-xs sm:text-sm rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#9a1c24] focus:ring-1 focus:ring-[#9a1c24] transition-all"
                  />
                </div>

                {/* Campo: Tipo de Serviço */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="servico" className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Qual o foco do projeto? *</label>
                  <select 
                    id="servico" 
                    required 
                    className="bg-neutral-50 border border-black/10 text-[#121417] text-xs sm:text-sm rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#9a1c24] focus:ring-1 focus:ring-[#9a1c24] transition-all cursor-pointer"
                  >
                    <option value="">Selecione o serviço...</option>
                    <option value="arquitetura">Projeto Arquitetônico</option>
                    <option value="residencial">Construção Residencial</option>
                    <option value="corporativo">Projeto Corporativo/Comercial</option>
                    <option value="interiores">Design de Interiores de Luxo</option>
                    <option value="gestao">Gestão e Execução de Obras</option>
                    <option value="consultoria">Consultorias e Laudos Técnicos</option>
                  </select>
                </div>
              </div>

              {/* Campo: Mensagem */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensagem" className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Fale sobre suas expectativas *</label>
                <textarea 
                  id="mensagem" 
                  rows={4} 
                  required 
                  placeholder="Conte um pouco sobre o tamanho da obra, localização e o que você idealiza..." 
                  className="bg-neutral-50 border border-black/10 text-[#121417] placeholder:text-gray-400 text-xs sm:text-sm rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#9a1c24] focus:ring-1 focus:ring-[#9a1c24] transition-all resize-none"
                />
              </div>

              {/* Botão de Envio */}
              <div className="mt-2">
                <button 
                  type="submit" 
                  className="w-full text-[11px] font-semibold tracking-widest uppercase bg-[#9a1c24] hover:bg-[#80141a] text-white py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg shadow-[#9a1c24]/10 flex items-center justify-center gap-3 group"
                >
                  Enviar Mensagem e Iniciar Parceria
                  <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </button>
              </div>

              <span className="text-[10px] text-gray-400 text-center leading-relaxed block mt-2">
                * Respeitamos sua privacidade. Seus dados estão seguros e serão utilizados unicamente para retornarmos seu contato comercial.
              </span>
            </form>
          </div>

        </div>
      </section>

      {/* ==========================================
          FOOTER (RODAPÉ CORPORATIVO)
          ========================================== */}
      <footer className="relative w-full bg-[#121417] text-white border-t border-white/5 pt-16 pb-8 px-6 z-30">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
            
            {/* Bloco 1: Logo e Descrição (5/12) */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                {/* Logo ícone estilizado */}
                <div className="w-8 h-8 bg-[#9a1c24] flex items-center justify-center font-serif text-white font-bold text-lg rounded-sm">
                  R
                </div>
                <span className="font-serif tracking-widest text-sm font-semibold uppercase">
                  Rocha <span className="text-gray-400">&</span> Concreto
                </span>
              </div>
              <p className="text-gray-400 text-xs tracking-wide leading-relaxed max-w-sm mt-1">
                Uma assinatura técnica de destaque nacional. Desenvolvemos soluções sofisticadas com perfeccionismo de engenharia e beleza arquitetônica atemporal.
              </p>
              
              {/* Redes Sociais */}
              <div className="flex items-center gap-4 mt-2">
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bloco 2: Links Institucionais (3/12) */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-white border-l border-[#9a1c24] pl-2.5">
                Navegação
              </h3>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors duration-200">Início</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors duration-200">Quem Somos</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors duration-200">Serviços Oferecidos</a></li>
                <li><a href="#projetos" className="hover:text-white transition-colors duration-200">Portfólio de Obras</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors duration-200">Insights & Blog</a></li>
              </ul>
            </div>

            {/* Bloco 3: Contatos Rápidos (4/12) */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-white border-l border-[#9a1c24] pl-2.5">
                Atendimento Direct
              </h3>
              <ul className="space-y-3 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-[#c5a880] font-bold">•</span>
                  <span>+55 (19) 99999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c5a880] font-bold">•</span>
                  <span>contato@rochaconcreto.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c5a880] font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">Av. 29 de Agosto, 1000 — Centro, Leme - SP</span>
                </li>
              </ul>
            </div>

          </div>

          {/* DIVISOR DA LINHA DE CRÉDITOS */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 tracking-wide">
            <div>
              &copy; {new Date().getFullYear()} Rocha e Concreto Construtora. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
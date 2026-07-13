"use client";

import { useState, useEffect, useMemo } from "react";
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  // ===== DADOS DOS PROFISSIONAIS (SEÇÃO SOBRE - ATUALIZADA COM 4 INTEGRANTES) =====
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
      titulo:
        "Tendências de Arquitetura Minimalista para Projetos de Alto Padrão",
      resumo:
        "Descubra como a integração de elements naturais, iluminação cênica e o conceito 'less is more' estão transformando as fachadas e layouts das residências contemporâneas mais luxuosas.",
      data: "10 Jul, 2026",
      tempoLeitura: "5 min de leitura",
      imagem: "/minimalista.jpg",
    },
    {
      id: 2,
      destaque: false,
      categoria: "Gestão",
      titulo: "Como Evitar Desperdícios e Atrasos na Gestão de Obras",
      resumo:
        "Um guia prático sobre planejamento estratégico, cronogramas inteligentes e escolhas de fornecedores para manter o orçamento controle absoluto.",
      data: "08 Jul, 2026",
      tempoLeitura: "4 min de leitura",
      imagem: "/obras.jpg",
    },
    {
      id: 3,
      categoria: "Interiores",
      titulo: "Marcenaria Planejada Inteligente: Sofisticação e Otimização",
      resumo:
        "A fusão perfeita entre estética atemporal e o aproveitamento milimétrico de espaços internos na criação de mobiliários de luxo.",
      data: "05 Jul, 2026",
      tempoLeitura: "6 min de leitura",
      imagem: "/interiores.jpg",
    },
    {
      id: 4,
      categoria: "Construção",
      titulo: "Sustentabilidade e Tecnologia na Construção Civil Moderna",
      resumo:
        "Novos materiais, isolamento termoacústico de alta performance e sistemas integrados que valorizam o patrimônio a longo prazo.",
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

  const artigoPrincipal =
    artigosFiltrados.find((a) => a.destaque) || artigosFiltrados[0];
  const demaisArtigos = artigosFiltrados.filter(
    (a) => a.id !== artigoPrincipal?.id,
  );

  const limiteAvancar = isMobile ? 2 : 1;

  return (
    <div className="min-h-screen bg-[#121417] flex flex-col selection:bg-[#9a1c24] selection:text-white">
      {/* ==========================================
          PRIMEIRA DOBRA: HERO SECTION (FUNDO ESCURO)
          ========================================== */}
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
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover object-right md:object-center select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/80 md:via-[#121417]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-start bg-[#121417]/60 md:bg-transparent p-6 md:p-0 rounded-md md:rounded-none backdrop-blur-sm md:backdrop-blur-none transform -translate-y-4">
              {/* Exemplo de correção caso você use o logo aqui no futuro */}
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
                Há mais de 20 anos no mercado da construção civil, transformamos
                visões arrojadas em reality. Nossa trajetória traz a bagagem de
                grandes edifícios e residências de alto padrão, projetados e
                executados sob o mais rígido padrão de excelência para garantir
                a satisfação absoluta de nossos clientes.
              </p>
              <div className="mt-6">
                <button className="text-[11px] font-medium tracking-widest uppercase bg-[#9a1c24] text-white px-6 py-3 rounded-sm hover:bg-[#80141a] transition-all duration-300 shadow-lg shadow-[#9a1c24]/20 flex items-center gap-3 group">
                  Conhecer Portfólio
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BARRA DE ESTATÍSTICAS */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] z-40 w-full max-w-5xl px-4 sm:px-6">
          <div className="bg-[#1a1d24] border border-white/10 rounded-sm p-5 md:p-7 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="flex flex-col justify-center py-2 md:py-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
                20+
              </span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">
                Anos de Experiência
              </span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
                65k+ m²
              </span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">
                Área Construída
              </span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
                100%
              </span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">
                Projetos Bem Executados
              </span>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-0 pt-3 md:pt-0">
              <span className="text-2xl md:text-3xl font-light tracking-tight text-white">
                Alto Padrão
              </span>
              <span className="text-[9px] font-medium tracking-widest text-gray-400 uppercase mt-1">
                Em Cada Detalhe
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SEGUNDA DOBRA: SOBRE / OS RESPONSÁVEIS
          ========================================== */}
      <section
        id="sobre"
        className="relative w-full bg-[#f9f6f0] pt-28 pb-24 md:pt-36 md:pb-32 px-6 text-[#121417] z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Cabeçalho da Seção */}
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
              estética e inovadora da arquitetura de alto padrão. Conheça os
              especialistas dedicados a transformar o seu projeto em um legacy
              atemporal.
            </p>
          </div>

          {/* Grid Compacto e Altamente Responsivo */}
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 items-stretch mt-4 snap-x snap-mandatory pb-4 no-scrollbar">
            {equipe.map((profissional) => (
              <div
                key={profissional.id}
                className="group relative bg-white border border-black/5 rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-[#9a1c24]/30 min-w-[80vw] sm:min-w-[45vw] lg:min-w-0 snap-start shrink-0"
              >
                <div>
                  {/* Imagem do Profissional */}
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

                  {/* Dados Corporativos */}
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-[8px] font-bold tracking-widest text-[#9a1c24] uppercase min-h-[12px] block">
                      {profissional.cargo}
                    </span>
                    <h3 className="font-serif text-lg tracking-wide font-light text-[#121417] mt-1 group-hover:text-[#9a1c24] transition-colors duration-300 line-clamp-1">
                      {profissional.nome}
                    </h3>

                    <div className="w-6 h-[1px] bg-[#c5a880] my-3 transition-all duration-500 group-hover:w-12" />

                    {/* Lista Curta de Formação */}
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

                {/* Footer do Card */}
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

      {/* ==========================================
          TERCEIRA DOBRA: SERVIÇOS (SLIDER DINÂMICO MODIFICADO)
          ========================================== */}
      <section
        id="servicos"
        className="relative w-full bg-[#121417] py-12 md:py-20 px-4 sm:px-6 border-t border-white/5 z-10 overflow-hidden"
      >
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
              Expertise integrada e rigor técnico em cada etapa do design,
              planejamento e execução da sua obra.
            </p>
          </div>

          {/* CONTAINER DOS CARDS COM ARRASTE LATERAL E TRANSLATE SEGURO */}
          <div className="relative w-full max-w-5xl mx-auto flex items-center gap-4">
            {/* BOTÃO VOLTAR (OCULTO NO MOBILE) */}
            <button
              onClick={() => setGrupoAtivo((prev) => (prev > 0 ? prev - 1 : 0))}
              className={`w-12 h-12 rounded-full border hidden md:flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 ${
                grupoAtivo === 0
                  ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-50"
                  : "border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20"
              }`}
              aria-label="Voltar serviços"
              disabled={grupoAtivo === 0}
            >
              &larr;
            </button>

            {/* ÁREA CENTRAL DO CARROSSEL */}
            <div className="relative w-full overflow-hidden pb-4 no-scrollbar">
              {/* CONTAINER GERAL DOS CARDS (GRID SUBSTITUÍDO POR FLEX HORIZONTAL) */}
              <div
                className="flex flex-row gap-4 md:gap-6 w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${grupoAtivo * 100}%)` }}
              >
                {/* CARD 1: ARQUITETURA */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] shrink-0">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-11 md:h-11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m15 5-3-3-3 3" />
                      <path d="M12 2v20" />
                      <path d="m5 16 7-9 7 9" />
                      <path d="M19 19H5" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-4">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      Arquitetura
                    </h3>
                    <p className="text-xs md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      Projetos conceituais que equilibram perfeitamente
                      criatividade e funcionalidade.
                    </p>
                  </div>
                </div>

                {/* CARD 2: RESIDENCIAL */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] shrink-0">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-11 md:h-11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-4">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      Residencial
                    </h3>
                    <p className="text-xs md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      Casas exclusivas de alto padrão construídas com precisão e
                      cuidado absoluto.
                    </p>
                  </div>
                </div>

                {/* CARD 3: COMERCIAL */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] shrink-0">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-11 md:h-11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="10" width="10" height="12" rx="2" />
                      <rect x="12" y="2" width="10" height="20" rx="2" />
                      <path d="M6 14h.01" />
                      <path d="M6 18h.01" />
                      <path d="M16 6h.01" />
                      <path d="M16 10h.01" />
                      <path d="M16 14h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-4">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      Comercial
                    </h3>
                    <p className="text-xs md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      Espaços corporativos e comerciais de alta performance
                      projetados para negócios.
                    </p>
                  </div>
                </div>

                {/* CARD 4: INTERIORES */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] shrink-0">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-11 md:h-11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11h18" />
                      <path d="M5 11V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
                      <path d="M12 2v3" />
                      <path d="M6 11v7c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-7" />
                      <path d="M9 20v2" />
                      <path d="M15 20v2" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-4">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      Interiores
                    </h3>
                    <p className="text-xs md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      Interiores sofisticados, marcenaria e detalhamento
                      adaptados ao seu bem-estar.
                    </p>
                  </div>
                </div>

                {/* CARD 5: GESTÃO DE OBRAS */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] shrink-0">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-11 md:h-11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="M9 12h6" />
                      <path d="M9 16h6" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-4">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      Gestão de Obras
                    </h3>
                    <p className="text-xs md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      Execução contínua e transparente, cuidando dos custos até
                      a entrega das chaves.
                    </p>
                  </div>
                </div>

                {/* CARD 6: CONSULTORIA */}
                <div className="bg-[#1a1d24]/40 border border-white/20 rounded-xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-300 hover:border-[#9a1c24] hover:bg-[#1a1d24]/80 md:hover:-translate-y-1 group cursor-pointer w-[calc((100%-1rem)/2)] md:w-[calc((100%-3rem)/3)] shrink-0">
                  <div className="text-[#c5a880] group-hover:text-white transition-colors duration-300 mt-1 transform group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 md:w-11 md:h-11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center flex-grow justify-center mt-4">
                    <h3 className="font-serif text-lg md:text-2xl tracking-wide font-light text-white mb-2">
                      Consultoria
                    </h3>
                    <p className="text-xs md:text-base text-gray-400 tracking-wide leading-relaxed line-clamp-3">
                      Estudos de viabilidade técnica, laudos estruturais e
                      análises patrimoniais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTÃO AVANÇAR (OCULTO NO MOBILE) */}
            <button
              onClick={() =>
                setGrupoAtivo((prev) =>
                  prev < limiteAvancar ? prev + 1 : prev,
                )
              }
              className={`w-12 h-12 rounded-full border hidden md:flex items-center justify-center transition-all duration-300 text-base shrink-0 z-20 ${
                grupoAtivo === limiteAvancar
                  ? "border-white/5 bg-white/5 text-gray-600 cursor-not-allowed opacity-50"
                  : "border-[#9a1c24] bg-[#9a1c24] text-white shadow-lg shadow-[#9a1c24]/20"
              }`}
              aria-label="Próximos serviços"
              disabled={grupoAtivo === limiteAvancar}
            >
              &rarr;
            </button>
          </div>

          {/* INDICADORES INFERIORES ATUALIZADOS DINAMICAMENTE */}
          <div className="flex justify-center items-center gap-2 mt-2">
            <button
              onClick={() => setGrupoAtivo(0)}
              className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 0 ? "w-6 bg-[#9a1c24]" : "w-2 bg-white/20"}`}
            />
            <button
              onClick={() => setGrupoAtivo(1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 1 ? "w-6 bg-[#9a1c24]" : "w-2 bg-white/20"}`}
            />
            {isMobile && (
              <button
                onClick={() => setGrupoAtivo(2)}
                className={`h-1.5 rounded-full transition-all duration-300 ${grupoAtivo === 2 ? "w-6 bg-[#9a1c24]" : "w-2 bg-white/20"}`}
              />
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          QUARTA DOBRA: PROJETOS & PROCESSO (CREME CLARO)
          ========================================== */}
      <section
        id="projetos"
        className="relative w-full bg-[#f9f6f0] py-20 md:py-24 px-6 text-[#121417] z-10 border-t border-black/5"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* PARTE 1: ABAS / GALERIA DE PROJETOS */}
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
                <span className="px-4 py-2 bg-[#121417] text-white rounded-sm cursor-pointer">
                  Todos
                </span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">
                  Residencial
                </span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">
                  Corporativo
                </span>
                <span className="px-4 py-2 hover:text-[#121417] cursor-pointer transition-colors">
                  Interiores
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Projeto 1 */}
              <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800">
                <Image
                  src="/hero-bg.png"
                  alt="Residência Alphaville"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-6 text-white z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">
                    Alto Padrão
                  </span>
                  <h3 className="font-serif text-xl font-light mt-1">
                    Residência Alphaville
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">Leme, SP</p>
                </div>
              </div>

              {/* Projeto 2 */}
              <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800">
                <Image
                  src="/pirassununga-foto.png"
                  alt="Corporate Tower"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-6 text-white z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">
                    Comercial
                  </span>
                  <h3 className="font-serif text-xl font-light mt-1">
                    Corporate Tower
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">Campinas, SP</p>
                </div>
              </div>

              {/* Projeto 3 */}
              <div className="group relative flex flex-col justify-end h-[380px] rounded-2xl overflow-hidden shadow-lg bg-neutral-800">
                <Image
                  src="/hero-bg.png"
                  alt="Loft Integrado"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="relative p-6 text-white z-10">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-[#c5a880]">
                    Interiores
                  </span>
                  <h3 className="font-serif text-xl font-light mt-1">
                    Loft Integrado
                  </h3>
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
                Uma Jornada Contínua <br className="hidden md:block" />
                <span className="font-semibold text-[#1a1d24]">
                  Do Conceito à Realidade
                </span>
              </h2>
            </div>

            {/* Linha do Tempo Estilizada */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {/* Passo 01 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  01
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">
                  Alinhamento
                </h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Entendemos suas necessidades, objetivos de investimento,
                  prazos e expectativas iniciais.
                </p>
              </div>

              {/* Passo 02 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  02
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">
                  Estudo Técnico
                </h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Análise rigorosa de viabilidade, topografia e adequações
                  legais estruturadas milimetricamente.
                </p>
              </div>

              {/* Passo 03 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  03
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">
                  Engenharia Fina
                </h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Desenvolvimento do design executivo cruzando estética
                  arquitetônica e soluções de alta performance.
                </p>
              </div>

              {/* Passo 04 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  04
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">
                  Construção Ativa
                </h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Execução de obra com fiscalização rígida de materiais, gestão
                  de custos e cronograma transparente.
                </p>
              </div>

              {/* Passo 05 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-10 h-10 rounded-full bg-[#121417] text-[#c5a880] font-medium text-xs flex items-center justify-center shadow-md border border-white/10 group-hover:bg-[#9a1c24] group-hover:text-white transition-colors duration-300">
                  05
                </div>
                <h4 className="font-serif text-base font-semibold text-[#121417] mt-4 mb-2">
                  Entrega de Chaves
                </h4>
                <p className="text-xs text-gray-600 tracking-wide leading-relaxed">
                  Inspeção minuciosa de acabamentos e validação de engenharia
                  com garantia de pós-entrega diferenciada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          QUINTA DOBRA: INSIGHTS & TENDÊNCIAS 
          ========================================== */}
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
              <p className="mt-3 text-gray-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-lg">
                Artigos, análises exclusivas e novidades sobre o universo da
                arquitetura, engenharia e design de interiores de alto padrão.
              </p>
            </div>
          </div>

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

          <div className="max-w-5xl mx-auto w-full flex flex-col gap-8 md:gap-12">
            {/* CARD EM DESTAQUE */}
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
                    Ler artigo completo{" "}
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
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
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
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
                <p className="text-sm text-gray-500 tracking-wide">
                  Nenhum insight publicado nesta categoria ainda.
                </p>
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

/** Artigos exibidos na seção "Insights & Tendências". */

export interface Artigo {
  id: number;
  destaque?: boolean;
  categoria: string;
  titulo: string;
  resumo: string;
  data: string;
  tempoLeitura: string;
  imagem: string;
}

/** Categorias do filtro, na ordem de exibição. */
export const categoriasInsights = [
  "Todos",
  "Arquitetura",
  "Construção",
  "Interiores",
  "Gestão",
];

// TODO(dados-reais): substituir por artigos reais quando o blog existir.
export const artigos: Artigo[] = [
  {
    id: 1,
    destaque: true,
    categoria: "Arquitetura",
    titulo:
      "Tendências de Arquitetura Minimalista para Projetos de Alto Padrão",
    resumo:
      "Descubra como a integração de elementos naturais, iluminação cênica e o conceito 'less is more' estão transformando as fachadas e layouts das residências contemporâneas mais luxuosas.",
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
      "Um guia prático sobre planejamento estratégico, cronogramas inteligentes e escolha de fornecedores para manter o orçamento sob controle absoluto.",
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

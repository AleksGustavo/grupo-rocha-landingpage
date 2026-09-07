/** Corpo técnico exibido na seção "Sobre". */

export interface Profissional {
  id: number;
  nome: string;
  cargo: string;
  formacao: string[];
  imagem: string;
  /** classe utilitária de object-position para ajustar o enquadramento da foto */
  posicao?: string;
}

export const equipe: Profissional[] = [
  {
    id: 1,
    nome: "Arq. Carlos Rocha",
    cargo: "Arquiteto e Urbanista",
    formacao: [
      "Arq. Sustentável (UPC - Espanha)",
      "Esp. em Resíduos Sólidos e Percolados",
      "+20 anos de experiência no mercado",
    ],
    imagem: "/carlos.png",
    posicao: "object-top",
  },
  {
    id: 2,
    nome: "Marlon Rocha",
    cargo: "Direção de Obras",
    formacao: ["+10 anos de experiência no mercado de construção civil"],
    imagem: "/marlon.png",
    posicao: "object-[50%_27%]",
  },
  {
    id: 3,
    nome: "Mônica Dourado",
    cargo: "Administração",
    formacao: [
      "Técnica em Administração (ETEC)",
      "+20 anos de experiência com administração de obras e equipes",
    ],
    imagem: "/monica.png",
    posicao: "object-[50%_18%]",
  },
  {
    id: 4,
    nome: "Arq. Mayara Rocha",
    cargo: "Arquiteta Urbanista",
    formacao: [
      "Arquitetura e Urbanismo (Anhanguera)",
      "Técnica em Design Gráfico (ETEC)",
      "+8 anos de experiência no mercado",
    ],
    imagem: "/mayara.jpeg",
    posicao: "object-top",
  },
];

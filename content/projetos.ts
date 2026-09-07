/** Obras exibidas no carrossel da seção "Projetos". */

export type CategoriaProjeto = "Residencial" | "Corporativo" | "Interiores";

export interface Projeto {
  id: number;
  titulo: string;
  /** categoria usada pelo filtro (conjunto fechado) */
  categoria: CategoriaProjeto;
  /** rótulo livre exibido no card */
  rotulo: string;
  local: string;
  imagem: string;
}

/** Categorias do filtro, na ordem de exibição. "Todos" é adicionado na UI. */
export const categoriasProjetos: CategoriaProjeto[] = [
  "Residencial",
  "Corporativo",
  "Interiores",
];

// TODO(dados-reais): substituir por obras e imagens reais do portfólio.
export const projetos: Projeto[] = [
  {
    id: 1,
    titulo: "Residência Alphaville",
    categoria: "Residencial",
    rotulo: "Alto Padrão",
    local: "Leme, SP",
    imagem: "/hero-bg.png",
  },
  {
    id: 2,
    titulo: "Corporate Tower",
    categoria: "Corporativo",
    rotulo: "Comercial",
    local: "Campinas, SP",
    imagem: "/pirassununga-foto.png",
  },
  {
    id: 3,
    titulo: "Loft Integrado",
    categoria: "Interiores",
    rotulo: "Interiores",
    local: "Araras, SP",
    imagem: "/hero-bg.png",
  },
  {
    id: 4,
    titulo: "Residência Conceito",
    categoria: "Residencial",
    rotulo: "Alto Padrão",
    local: "Pirassununga, SP",
    imagem: "/pirassununga-foto.png",
  },
  {
    id: 5,
    titulo: "Escritório Executive",
    categoria: "Corporativo",
    rotulo: "Corporativo",
    local: "Campinas, SP",
    imagem: "/hero-bg.png",
  },
];

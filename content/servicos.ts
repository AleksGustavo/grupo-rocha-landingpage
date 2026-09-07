/** Serviços oferecidos, exibidos no carrossel da seção "Serviços". */

export type IconeServico =
  | "arquitetura"
  | "residencial"
  | "comercial"
  | "interiores"
  | "gestao"
  | "consultoria";

export interface Servico {
  slug: string;
  titulo: string;
  descricao: string;
  icone: IconeServico;
}

export const servicos: Servico[] = [
  {
    slug: "arquitetura",
    titulo: "Arquitetura",
    descricao:
      "Projetos conceituais que equilibram perfeitamente criatividade e funcionalidade.",
    icone: "arquitetura",
  },
  {
    slug: "residencial",
    titulo: "Residencial",
    descricao:
      "Casas exclusivas de alto padrão construídas com precisão e cuidado absoluto.",
    icone: "residencial",
  },
  {
    slug: "comercial",
    titulo: "Comercial",
    descricao:
      "Espaços corporativos e comerciais de alta performance projetados para negócios.",
    icone: "comercial",
  },
  {
    slug: "interiores",
    titulo: "Interiores",
    descricao:
      "Interiores sofisticados, marcenaria e detalhamento adaptados ao seu bem-estar.",
    icone: "interiores",
  },
  {
    slug: "gestao-de-obras",
    titulo: "Gestão de Obras",
    descricao:
      "Execução contínua e transparente, cuidando dos custos até a entrega das chaves.",
    icone: "gestao",
  },
  {
    slug: "consultoria",
    titulo: "Consultoria",
    descricao:
      "Estudos de viabilidade técnica, laudos estruturais e análises patrimoniais.",
    icone: "consultoria",
  },
];

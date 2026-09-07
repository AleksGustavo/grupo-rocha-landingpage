/** Itens de navegação (âncoras das seções da landing page), na ordem do layout. */

export interface ItemNav {
  id: string;
  label: string;
}

export const navegacao: ItemNav[] = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "insights", label: "Insights" },
  { id: "contato", label: "Contato" },
];

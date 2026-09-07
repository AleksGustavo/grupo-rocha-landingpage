/**
 * Fonte única de verdade para os dados institucionais do Grupo Rocha.
 *
 * TODO(dados-reais): os valores abaixo são provisórios e precisam ser
 * confirmados com o cliente antes de publicar em produção (telefone, e-mail,
 * endereço, redes sociais e domínio do site).
 */

export const empresa = {
  nome: "Grupo Rocha Construtoras",
  marca: "Rocha & Concreto",
  segmento: "Arquitetura e Construção",
  slogan: "Arquitetura e Construção de Alto Padrão",
  descricao:
    "Uma assinatura técnica de destaque nacional. Desenvolvemos soluções sofisticadas com perfeccionismo de engenharia e beleza arquitetônica atemporal.",

  telefone: {
    // exibição amigável
    display: "+55 (19) 99930-5432",
    // formato E.164 sem símbolos, para links tel:/wa.me
    e164: "5519999305432",
  },

  whatsapp: {
    display: "+55 (19) 99930-5432",
    link: "https://wa.me/5519999305432",
  },

  email: "mrrochaeconcreto@gmail.com",

  endereco: {
    logradouro: "Rua Dr. Gonçalves da Cunha, 692",
    bairro: "Centro",
    cidade: "Leme",
    uf: "SP",
    cep: "",
    // linhas prontas para exibição (uma por <br />)
    linhas: ["Rua Dr. Gonçalves da Cunha, 692 — Centro", "Leme, SP"],
  },

  horario: "Segunda a Sexta: 08h às 18h • Sábados: com agendamento prévio",

  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },

  site: {
    // usado por metadata, sitemap e robots
    url: "https://gruporocha.com.br",
  },

  estatisticas: [
    { valor: "20+", rotulo: "Anos de Experiência" },
    { valor: "65k+ m²", rotulo: "Área Construída" },
    { valor: "100%", rotulo: "Projetos Bem Executados" },
    { valor: "Alto Padrão", rotulo: "Em Cada Detalhe" },
  ],
} as const;

export type Empresa = typeof empresa;

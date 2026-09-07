import { empresa } from "@/content/empresa";

const LINKS_NAV = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços Oferecidos" },
  { href: "#projetos", label: "Portfólio de Obras" },
  { href: "#insights", label: "Insights & Blog" },
];

const REDES = [
  {
    nome: "Instagram",
    href: empresa.social.instagram,
    paths: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    nome: "LinkedIn",
    href: empresa.social.linkedin,
    paths: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    nome: "YouTube",
    href: empresa.social.youtube,
    paths: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#121417] text-white border-t border-white/5 pt-16 pb-8 px-6 z-30">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Bloco 1: Logo e Descrição */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#9a1c24] flex items-center justify-center font-serif text-white font-bold text-lg rounded-sm">
                R
              </div>
              <span className="font-serif tracking-widest text-sm font-semibold uppercase">
                Rocha <span className="text-gray-400">&amp;</span> Concreto
              </span>
            </div>
            <p className="text-gray-400 text-xs tracking-wide leading-relaxed max-w-sm mt-1">
              {empresa.descricao}
            </p>

            <div className="flex items-center gap-4 mt-2">
              {REDES.map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.nome}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c5a880]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {rede.paths}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Bloco 2: Navegação */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-white border-l border-[#9a1c24] pl-2.5">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              {LINKS_NAV.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloco 3: Atendimento Direto */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-white border-l border-[#9a1c24] pl-2.5">
              Atendimento Direto
            </h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-[#c5a880] font-bold">•</span>
                <span>{empresa.telefone.display}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#c5a880] font-bold">•</span>
                <span>{empresa.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c5a880] font-bold mt-0.5">•</span>
                <span className="leading-relaxed">
                  {empresa.endereco.linhas.join(", ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-gray-500 tracking-wide">
          <div>
            &copy; {new Date().getFullYear()} {empresa.marca} Construtora. Todos
            os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Políticas de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

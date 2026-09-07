import { empresa } from "@/content/empresa";
import ContatoForm from "./ContatoForm";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative w-full bg-[#f9f6f0] py-20 md:py-28 px-4 sm:px-6 md:px-8 z-10 text-[#121417]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* COLUNA ESQUERDA: INFORMAÇÕES DE CONTATO */}
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
              Seja para uma residência de alto padrão, um espaço corporativo ou
              uma consultoria técnica especializada, nossa equipe está pronta
              para materializar o seu legado.
            </p>
          </div>

          <div className="flex flex-col gap-6 my-4">
            {/* Telefone / WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#121417] flex items-center justify-center text-white shrink-0 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#c5a880]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  Telefone &amp; Whatsapp
                </h3>
                <p className="text-sm font-semibold text-[#121417] mt-0.5 hover:text-[#9a1c24] transition-colors">
                  <a
                    href={empresa.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {empresa.telefone.display}
                  </a>
                </p>
              </div>
            </div>

            {/* E-mail */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#121417] flex items-center justify-center text-white shrink-0 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#c5a880]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  E-mail Corporativo
                </h3>
                <p className="text-sm font-semibold text-[#121417] mt-0.5 hover:text-[#9a1c24] transition-colors">
                  <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
                </p>
              </div>
            </div>

            {/* Endereço Físico */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#121417] flex items-center justify-center text-white shrink-0 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#c5a880]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                  Escritório Central
                </h3>
                <p className="text-sm font-semibold text-[#121417] mt-0.5 leading-relaxed">
                  {empresa.endereco.linhas.map((linha, i) => (
                    <span key={linha}>
                      {i > 0 && <br />}
                      {linha}
                    </span>
                  ))}
                  {empresa.endereco.cep && (
                    <>
                      <br />
                      CEP {empresa.endereco.cep}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-black/5 pt-6 hidden lg:block">
            <span className="text-[9px] font-bold tracking-widest uppercase text-gray-400">
              Horário de Funcionamento
            </span>
            <p className="text-xs text-gray-600 mt-1">{empresa.horario}</p>
          </div>
        </div>

        {/* COLUNA DIREITA: FORMULÁRIO */}
        <div className="lg:col-span-7 bg-white border border-black/5 rounded-2xl p-6 sm:p-10 shadow-xl">
          <ContatoForm />
        </div>
      </div>
    </section>
  );
}

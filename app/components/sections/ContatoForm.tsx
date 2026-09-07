"use client";

import { useActionState } from "react";
import {
  enviarContato,
  estadoInicialContato,
  type EstadoContato,
} from "@/lib/actions";

const inputClasse =
  "bg-neutral-50 border border-black/10 text-[#121417] placeholder:text-gray-400 text-xs sm:text-sm rounded-sm px-4 py-3.5 focus:outline-none focus:border-[#9a1c24] focus:ring-1 focus:ring-[#9a1c24] transition-all";
const labelClasse =
  "text-[10px] font-bold tracking-widest uppercase text-gray-500";

function ErroCampo({ erro }: { erro?: string }) {
  if (!erro) return null;
  return (
    <span className="text-[10px] font-medium text-[#9a1c24]" role="alert">
      {erro}
    </span>
  );
}

export default function ContatoForm() {
  const [state, formAction, pending] = useActionState<EstadoContato, FormData>(
    enviarContato,
    estadoInicialContato,
  );

  if (state.status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center gap-3 py-12"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 rounded-full bg-[#9a1c24]/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#9a1c24]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-light text-[#121417]">
          Mensagem enviada
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-sm">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-6" noValidate>
      {/* Honeypot anti-spam — invisível para usuários. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Não preencha este campo</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message && (
        <p
          className="text-xs font-medium text-[#9a1c24] bg-[#9a1c24]/5 border border-[#9a1c24]/20 rounded-sm px-4 py-3"
          role="alert"
          aria-live="assertive"
        >
          {state.message}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nome" className={labelClasse}>
            Nome Completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            autoComplete="name"
            placeholder="Ex: Aleksander Assis"
            aria-invalid={Boolean(state.errors?.nome)}
            className={inputClasse}
          />
          <ErroCampo erro={state.errors?.nome} />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClasse}>
            E-mail de Contato *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Ex: seuemail@dominio.com"
            aria-invalid={Boolean(state.errors?.email)}
            className={inputClasse}
          />
          <ErroCampo erro={state.errors?.email} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="tel" className={labelClasse}>
            Telefone / WhatsApp
          </label>
          <input
            type="tel"
            id="tel"
            name="telefone"
            autoComplete="tel"
            placeholder="Ex: (19) 99999-9999"
            className={inputClasse}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="servico" className={labelClasse}>
            Qual o foco do projeto? *
          </label>
          <select
            id="servico"
            name="servico"
            required
            defaultValue=""
            aria-invalid={Boolean(state.errors?.servico)}
            className={`${inputClasse} cursor-pointer`}
          >
            <option value="">Selecione o serviço...</option>
            <option value="arquitetura">Projeto Arquitetônico</option>
            <option value="residencial">Construção Residencial</option>
            <option value="corporativo">Projeto Corporativo/Comercial</option>
            <option value="interiores">Design de Interiores de Luxo</option>
            <option value="gestao">Gestão e Execução de Obras</option>
            <option value="consultoria">Consultorias e Laudos Técnicos</option>
          </select>
          <ErroCampo erro={state.errors?.servico} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className={labelClasse}>
          Fale sobre suas expectativas *
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          placeholder="Conte um pouco sobre o tamanho da obra, localização e o que você idealiza..."
          aria-invalid={Boolean(state.errors?.mensagem)}
          className={`${inputClasse} resize-none`}
        />
        <ErroCampo erro={state.errors?.mensagem} />
      </div>

      <div className="mt-2">
        <button
          type="submit"
          disabled={pending}
          className="w-full text-[11px] font-semibold tracking-widest uppercase bg-[#9a1c24] hover:bg-[#80141a] text-white py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg shadow-[#9a1c24]/10 flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#121417]"
        >
          {pending ? "Enviando..." : "Enviar Mensagem e Iniciar Parceria"}
          {!pending && (
            <span className="transform group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          )}
        </button>
      </div>

      <span className="text-[10px] text-gray-400 text-center leading-relaxed block mt-2">
        * Respeitamos sua privacidade. Seus dados estão seguros e serão
        utilizados unicamente para retornarmos seu contato comercial.
      </span>
    </form>
  );
}

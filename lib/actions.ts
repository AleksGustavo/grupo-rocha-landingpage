"use server";

import { Resend } from "resend";
import { empresa } from "@/content/empresa";

export type EstadoContato = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<
    Record<"nome" | "email" | "telefone" | "servico" | "mensagem", string>
  >;
};

export const estadoInicialContato: EstadoContato = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function texto(formData: FormData, campo: string): string {
  const valor = formData.get(campo);
  return typeof valor === "string" ? valor.trim() : "";
}

export async function enviarContato(
  _prevState: EstadoContato,
  formData: FormData,
): Promise<EstadoContato> {
  // Honeypot anti-spam: campo invisível que humanos não preenchem.
  if (texto(formData, "website")) {
    return { status: "success", message: "Mensagem enviada com sucesso." };
  }

  const nome = texto(formData, "nome");
  const email = texto(formData, "email");
  const telefone = texto(formData, "telefone");
  const servico = texto(formData, "servico");
  const mensagem = texto(formData, "mensagem");

  const errors: EstadoContato["errors"] = {};
  if (nome.length < 2) errors.nome = "Informe seu nome completo.";
  if (!EMAIL_RE.test(email)) errors.email = "Informe um e-mail válido.";
  if (!servico) errors.servico = "Selecione o foco do projeto.";
  if (mensagem.length < 10)
    errors.mensagem =
      "Conte um pouco mais sobre o projeto (mín. 10 caracteres).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revise os campos destacados e tente novamente.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || empresa.email;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error(
      "[contato] RESEND_API_KEY ou CONTACT_FROM_EMAIL ausente — e-mail não enviado.",
    );
    return {
      status: "error",
      message:
        "O envio ainda não está configurado. Fale conosco pelo WhatsApp ou e-mail acima.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contato do site — ${nome}`,
      text: [
        `Nome: ${nome}`,
        `E-mail: ${email}`,
        `Telefone: ${telefone || "não informado"}`,
        `Foco do projeto: ${servico}`,
        "",
        "Mensagem:",
        mensagem,
      ].join("\n"),
    });

    if (error) {
      console.error("[contato] Falha no envio via Resend:", error);
      return {
        status: "error",
        message:
          "Não foi possível enviar agora. Tente novamente em instantes ou use o WhatsApp.",
      };
    }
  } catch (err) {
    console.error("[contato] Erro inesperado no envio:", err);
    return {
      status: "error",
      message:
        "Não foi possível enviar agora. Tente novamente em instantes ou use o WhatsApp.",
    };
  }

  return {
    status: "success",
    message:
      "Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.",
  };
}

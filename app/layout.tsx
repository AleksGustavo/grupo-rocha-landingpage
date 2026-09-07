import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { empresa } from "@/content/empresa";

const titulo = `${empresa.nome} — ${empresa.slogan}`;

export const metadata: Metadata = {
  metadataBase: new URL(empresa.site.url),
  title: {
    default: titulo,
    template: `%s — ${empresa.nome}`,
  },
  description: empresa.descricao,
  applicationName: empresa.nome,
  keywords: [
    "arquitetura",
    "construção civil",
    "construtora",
    "alto padrão",
    "gestão de obras",
    "design de interiores",
    "Leme SP",
  ],
  authors: [{ name: empresa.nome }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: empresa.nome,
    title: titulo,
    description: empresa.descricao,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: empresa.descricao,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-[#9a1c24] focus:text-white focus:px-4 focus:py-2 focus:rounded-sm focus:text-xs focus:font-semibold focus:tracking-widest focus:uppercase"
        >
          Pular para o conteúdo
        </a>

        <Header />

        <main id="conteudo" className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}

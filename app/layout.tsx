import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Grupo Rocha Construtoras",
  description: "Arquitetura e Construção de Alto Padrão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* O nosso cabeçalho de luxo fixo no topo */}
        <Header />
        
        {/* O conteúdo da landing page entra abaixo dele */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
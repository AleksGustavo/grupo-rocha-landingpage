"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navegacao } from "@/content/navegacao";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setIsScrolled(window.scrollY > 20);

      const offset = 150;
      let found = navegacao[0].id;
      for (const { id } of navegacao) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= offset) {
          found = id;
        } else {
          break;
        }
      }
      setActiveSection(found);
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu mobile ao voltar para o breakpoint desktop.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => mql.matches && setMenuOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 80;
    const offsetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  };

  const linkClasse = (id: string) =>
    `text-xs font-medium tracking-widest uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a1c24] ${
      activeSection === id ? "text-[#9a1c24]" : "text-gray-400 hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#121417] shadow-lg backdrop-blur-md"
            : "bg-[#121417]/80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGOTIPO */}
        <Link
          href="/"
          onClick={(e) => handleScrollTo(e, "home")}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="Grupo Rocha Construtoras"
            sizes="(max-width: 768px) 100vw, 58vw"
            width={160}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* MENU DE NAVEGAÇÃO (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-8">
          {navegacao.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className={linkClasse(item.id)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* BOTÃO DA DIREITA (DESKTOP) */}
        <div className="hidden md:block">
          <Link
            href="#contato"
            onClick={(e) => handleScrollTo(e, "contato")}
            className="text-xs font-medium tracking-widest uppercase border border-[#9a1c24]/40 text-white px-6 py-2.5 rounded-sm hover:bg-[#9a1c24] hover:border-[#9a1c24] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24]"
          >
            Fale Conosco
          </Link>
        </div>

        {/* BOTÃO HAMBÚRGUER (MOBILE) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9a1c24]"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* PAINEL MOBILE */}
      <nav
        id="menu-mobile"
        hidden={!menuOpen}
        className="md:hidden border-t border-white/5 bg-[#121417] px-6 py-4 flex flex-col gap-1"
      >
        {navegacao.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScrollTo(e, item.id)}
            className={`${linkClasse(item.id)} py-3`}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#contato"
          onClick={(e) => handleScrollTo(e, "contato")}
          className="mt-2 text-xs font-medium tracking-widest uppercase text-center border border-[#9a1c24]/40 text-white px-6 py-3 rounded-sm hover:bg-[#9a1c24] hover:border-[#9a1c24] transition-all duration-300"
        >
          Fale Conosco
        </Link>
      </nav>
    </header>
  );
}

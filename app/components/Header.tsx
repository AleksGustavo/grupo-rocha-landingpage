'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Remove a transparência do fundo ao rolar mais de 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Altera o link ativo dinamicamente com base na seção visível
      const sobreSection = document.getElementById('sobre');
      if (sobreSection) {
        const rect = sobreSection.getBoundingClientRect();
        // Se o topo da seção Sobre estiver próximo ou acima do topo da janela
        if (rect.top <= 100) {
          setActiveSection('sobre');
        } else {
          setActiveSection('home');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para realizar scroll suave ao clicar nos links (opcional, mas altamente recomendado)
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 border-b border-white/5 transition-all duration-300
        ${isScrolled 
          ? 'bg-[#121417] shadow-lg backdrop-blur-md' 
          : 'bg-[#121417]/80 backdrop-blur-md'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGOTIPO */}
        <Link href="/" onClick={(e) => handleScrollTo(e, 'home')} className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Grupo Rocha Construtoras" 
            width={160} 
            height={50} 
            className="object-contain"
            priority
          />
        </Link>

        {/* MENU DE NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#" 
            onClick={(e) => handleScrollTo(e, 'home')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'home' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </Link>
          <Link 
            href="#" 
            onClick={(e) => handleScrollTo(e, 'sobre')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'sobre' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Sobre
          </Link>
          <Link href="#" className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Serviços
          </Link>
          <Link href="#" className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Projetos
          </Link>
          <Link href="#" className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Insights
          </Link>
          <Link href="#" className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
            Contato
          </Link>
        </nav>

        {/* BOTÃO DA DIREITA */}
        <div className="hidden md:block">
          <Link 
            href="#" 
            className="text-xs font-medium tracking-widest uppercase border border-[#9a1c24]/40 text-white px-6 py-2.5 rounded-sm hover:bg-[#9a1c24] hover:border-[#9a1c24] transition-all duration-300"
          >
            Fale Conosco
          </Link>
        </div>

      </div>
    </header>
  );
}
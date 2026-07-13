'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Altera o fundo ao rolar
      setIsScrolled(window.scrollY > 20);

      // Lista de seções na ordem do layout (da primeira à última)
      const sectionIds = ['home', 'sobre', 'servicos', 'projetos', 'insights', 'contato'];
      const offset = 150; // distância do topo para considerar a seção ativa

      // Encontra a primeira seção cujo topo está dentro do offset
      let found = 'home';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            found = id;
          } else {
            break; // como estão em ordem, a primeira que ultrapassar o offset é a atual
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // executa uma vez para definir o estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // altura do header fixo
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
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
            sizes="(max-width: 768px) 100vw, 58vw"
            width={160} 
            height={50} 
            className="object-contain"
            priority
          />
        </Link>

        {/* MENU DE NAVEGAÇÃO */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#home" 
            onClick={(e) => handleScrollTo(e, 'home')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'home' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Home
          </Link>
          
          <Link 
            href="#sobre" 
            onClick={(e) => handleScrollTo(e, 'sobre')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'sobre' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Sobre
          </Link>

          <Link 
            href="#servicos" 
            onClick={(e) => handleScrollTo(e, 'servicos')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'servicos' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Serviços
          </Link>

          <Link 
            href="#projetos" 
            onClick={(e) => handleScrollTo(e, 'projetos')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'projetos' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Projetos
          </Link>

          <Link 
            href="#insights" 
            onClick={(e) => handleScrollTo(e, 'insights')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'insights' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Insights
          </Link>

          <Link 
            href="#contato" 
            onClick={(e) => handleScrollTo(e, 'contato')}
            className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300
              ${activeSection === 'contato' ? 'text-[#9a1c24]' : 'text-gray-400 hover:text-white'}`}
          >
            Contato
          </Link>
        </nav>

        {/* BOTÃO DA DIREITA */}
        <div className="hidden md:block">
          <Link 
            href="#contato" 
            className="text-xs font-medium tracking-widest uppercase border border-[#9a1c24]/40 text-white px-6 py-2.5 rounded-sm hover:bg-[#9a1c24] hover:border-[#9a1c24] transition-all duration-300"
          >
            Fale Conosco
          </Link>
        </div>

      </div>
    </header>
  );
}
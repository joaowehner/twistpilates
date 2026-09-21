import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin } from 'lucide-react';
import { studioData } from '../data/studioData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-[#E8E5DF] py-3' 
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-hidden" aria-label="Twist Pilates Início">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#4E216B] p-1.5 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <img 
                src="./assets/brand/logo-twist-white.svg" 
                alt="Símbolo Twist Pilates" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-[0.12em] text-[#35134A] leading-none">
                TWIST
              </span>
              <span className="font-bold text-[10px] sm:text-[11px] tracking-[0.28em] text-[#6C9B2E] uppercase leading-tight mt-0.5">
                PILATES
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#4A4550]">
            <a href="#estudio" className="hover:text-[#4E216B] transition-colors py-1">O Estúdio</a>
            <a href="#aparelhos" className="hover:text-[#4E216B] transition-colors py-1">Aparelhos</a>
            <a href="#galeria" className="hover:text-[#4E216B] transition-colors py-1">Galeria</a>
            <a href="#avaliacoes" className="hover:text-[#4E216B] transition-colors py-1">Avaliações</a>
            <a href="#localizacao" className="hover:text-[#4E216B] transition-colors py-1">Localização</a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-[#5F5B66] font-medium bg-[#EBF0E8] px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#6C9B2E]" />
              <span>Carandá Bosque</span>
            </div>
            
            <a
              href={studioData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4E216B] hover:bg-[#35134A] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#9BD444]" />
              <span>Agendar Aula</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={studioData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#4E216B] text-white text-xs font-semibold px-3 py-2 rounded-lg"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#9BD444]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#35134A] rounded-lg hover:bg-black/5 focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E8E5DF] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 text-base font-medium text-[#35134A]">
            <a 
              href="#estudio" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EBF0E8] transition-colors"
            >
              O Estúdio
            </a>
            <a 
              href="#aparelhos" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EBF0E8] transition-colors"
            >
              Aparelhos
            </a>
            <a 
              href="#galeria" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EBF0E8] transition-colors"
            >
              Galeria
            </a>
            <a 
              href="#avaliacoes" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EBF0E8] transition-colors"
            >
              Avaliações (5.0 no Google)
            </a>
            <a 
              href="#localizacao" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EBF0E8] transition-colors"
            >
              Localização (Carandá Bosque)
            </a>
            <div className="pt-2 border-t border-[#E8E5DF] flex flex-col gap-2">
              <a
                href={studioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#4E216B] text-white font-semibold py-3 rounded-xl shadow-xs"
              >
                <MessageCircle className="w-5 h-5 text-[#9BD444]" />
                <span>Falar no WhatsApp (67) 99920-2600</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

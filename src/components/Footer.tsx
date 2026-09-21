import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { studioData } from '../data/studioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C191F] text-white/70 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#4E216B] p-1.5 flex items-center justify-center">
                <img 
                  src="./assets/brand/logo-twist-white.svg" 
                  alt="Logo Twist Pilates" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-[0.14em] text-white leading-none">
                  TWIST
                </span>
                <span className="font-bold text-[10px] tracking-[0.3em] text-[#B6F05B] uppercase leading-tight mt-0.5">
                  PILATES
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              Estúdio de Pilates no Carandá Bosque com aparelhos de alto padrão Kauffer em madeira nobre. Saúde, postura e vitalidade em Campo Grande/MS.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={studioData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#4E216B] text-white/80 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Instagram Oficial Twist Pilates"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={studioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#8CC63F] text-white/80 hover:text-[#1C191F] flex items-center justify-center border border-white/10 transition-colors"
                aria-label="WhatsApp Oficial Twist Pilates"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#estudio" className="hover:text-white transition-colors">O Estúdio</a>
              </li>
              <li>
                <a href="#aparelhos" className="hover:text-white transition-colors">Aparelhos Kauffer</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria Real</a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">Avaliações 5.0 ⭐</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Endereço & Contato
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B6F05B] shrink-0 mt-1" />
                <span>
                  {studioData.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B6F05B] shrink-0" />
                <a href={studioData.whatsappUrl} className="hover:text-white font-medium">
                  {studioData.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#B6F05B] shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a 
                  href={studioData.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  {studioData.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/45 gap-4">
          <div>
            © {currentYear} Twist Pilates — Campo Grande/MS. Todos os direitos reservados.
          </div>
          <div className="text-center sm:text-right">
            <span>Rua Vitório Zeola, 810 • Carandá Bosque</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

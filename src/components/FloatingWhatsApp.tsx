import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { studioData } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:block mb-3 max-w-[240px] bg-white rounded-2xl p-3.5 shadow-xl border border-[#E8E5DF] text-xs text-[#35134A] animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#7A7582] hover:text-[#1D1B20]"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 font-bold text-[#4E216B] mb-1">
            <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse" />
            Twist Pilates Online
          </div>
          <p className="text-[#5F5B66] leading-snug">
            Olá! Gostaria de agendar sua aula experimental no Carandá Bosque?
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={studioData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#4E216B] hover:bg-[#35134A] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 border-2 border-white/20"
        aria-label="Iniciar conversa no WhatsApp com Twist Pilates"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-[#9BD444] group-hover:scale-110 transition-transform" />
        
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8CC63F] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#8CC63F] border-2 border-white"></span>
        </span>
      </a>

    </div>
  );
};

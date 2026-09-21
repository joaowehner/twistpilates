import React from 'react';
import { MessageCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { studioData } from '../data/studioData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#35134A] via-[#4E216B] to-[#2B0E3D] text-white relative overflow-hidden">
      
      {/* Background Decorative Rings / Diamond */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9BD444]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#9BD444]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#B6F05B] text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
          <Sparkles className="w-3.5 h-3.5 text-[#B6F05B]" />
          <span>Atendimento Personalizado</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
          Pronta para sentir a transformação no seu corpo e postura?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
          Agende sua aula experimental no Twist Pilates e conheça de perto nossa estrutura completa em madeira nobre no Carandá Bosque.
        </p>

        {/* Main WhatsApp Conversion Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={studioData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#8CC63F] hover:bg-[#9BD444] text-[#231230] font-black text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-98 group"
          >
            <MessageCircle className="w-6 h-6 text-[#231230] group-hover:scale-110 transition-transform" />
            <span>Falar no WhatsApp: {studioData.phone}</span>
          </a>

          <a
            href={`tel:${studioData.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-4 rounded-2xl border border-white/20 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B6F05B]" />
            <span>Ligar para o Estúdio</span>
          </a>
        </div>

        {/* Location & Instagram Info Bar */}
        <div className="pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/75">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#B6F05B]" />
            <span>Rua Vitório Zeola, nº 810, Sl 03 — Carandá Bosque</span>
          </div>
          <span className="hidden sm:inline opacity-40">•</span>
          <div>
            <span>Instagram: <strong className="text-white font-bold">{studioData.instagramHandle}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};

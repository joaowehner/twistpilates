import React from 'react';
import { Star, MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { studioData } from '../data/studioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#F4F7F2] to-[#FAF9F6]">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#EBF0E8]/70 via-[#F5EEFA]/50 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Location & Rating Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs sm:text-sm font-semibold border border-[#D7E3D2]">
                <MapPin className="w-3.5 h-3.5 text-[#6C9B2E]" />
                Carandá Bosque • Campo Grande/MS
              </span>

              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-[#1D1B20] text-xs sm:text-sm font-medium shadow-xs border border-[#E8E5DF]">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#35134A] ml-1">5.0</span>
                <span className="text-[#5F5B66] text-xs hidden sm:inline">(5 avaliações no Google)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#231230] leading-[1.12] tracking-tight mb-5">
              Pilates com aparelhos de alto padrão no{' '}
              <span className="relative whitespace-nowrap text-[#4E216B]">
                Carandá Bosque
                <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#8CC63F]/25 -z-10 rounded-sm"></span>
              </span>
            </h1>

            {/* Subtitle / Factual Pitch */}
            <p className="text-base sm:text-lg text-[#5F5B66] leading-relaxed max-w-2xl mb-8">
              Estúdio completo equipado com a consagrada linha em madeira nobre <strong className="text-[#35134A] font-semibold">Kauffer</strong>. Acompanhamento atento para sua postura, força e mobilidade em um ambiente exclusivo e climatizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href={studioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#4E216B] hover:bg-[#35134A] text-white text-base font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 group"
              >
                <MessageCircle className="w-5 h-5 text-[#9BD444] group-hover:scale-110 transition-transform" />
                <span>Agendar Aula Experimental</span>
                <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#estudio"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2EFE9] text-[#35134A] text-base font-medium px-6 py-3.5 rounded-xl border border-[#E8E5DF] transition-colors"
              >
                <span>Conhecer o Estúdio</span>
              </a>
            </div>

            {/* Factual Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E8E5DF] w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A4550]">
                <ShieldCheck className="w-4 h-4 text-[#6C9B2E] shrink-0" />
                <span>Aparelhos Kauffer</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A4550]">
                <Sparkles className="w-4 h-4 text-[#4E216B] shrink-0" />
                <span>Reformer & Cadillac</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A4550] col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#6C9B2E] shrink-0" />
                <span>Rua Vitório Zeola, 810</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Outer decorative soft border */}
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-[#E8E5DF] via-white to-[#EBF0E8] shadow-xl">
                
                {/* Main Hero Photo: Athlete on Kauffer Ladder Barrel with Wall Logo */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-[#2D2A32]">
                  <img
                    src="./assets/studio/ladder_barrel_pike.jpg"
                    alt="Aluna do Twist Pilates praticando no Ladder Barrel da Kauffer em Campo Grande MS"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Photo Caption Tag inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#4E216B]/90 backdrop-blur-xs text-[11px] font-semibold text-[#9BD444] uppercase tracking-wider mb-1">
                      Foto Real do Estúdio
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white/95">
                      Execução precisa no Ladder Barrel com a marca Twist Pilates ao fundo.
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Quality Guarantee (Visible on sm+ to keep mobile clean) */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#E8E5DF] items-center gap-3 z-10">
                <div className="w-8 h-8 rounded-xl bg-[#EBF0E8] flex items-center justify-center text-[#6C9B2E]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#5F5B66]">Linha Premium</div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#35134A]">Madeira Maciça Kauffer</div>
                </div>
              </div>

              {/* Floating Badge 2: Local Boutique Studio */}
              <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#E8E5DF] items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#4E216B] flex items-center justify-center text-white">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#35134A]">Nota Máxima 5.0</div>
                  <div className="text-[11px] text-[#5F5B66]">Avaliações reais no Google</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

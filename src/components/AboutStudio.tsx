import React from 'react';
import { Quote, CheckCircle2, MessageCircle } from 'lucide-react';
import { studioData } from '../data/studioData';

export const AboutStudio: React.FC = () => {
  return (
    <section id="estudio" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs font-bold uppercase tracking-wider mb-3">
            O Estúdio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#231230] tracking-tight mb-4">
            Um refúgio de movimento consciente em Campo Grande
          </h2>
          <p className="text-base sm:text-lg text-[#5F5B66] leading-relaxed">
            Localizado na Rua Vitório Zeola, o Twist Pilates foi planejado para oferecer uma experiência calma, precisa e acolhedora, onde cada detalhe auxilia no seu bem-estar.
          </p>
        </div>

        {/* 2-Column Story & Mural Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Real Photo of Wall Quote */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E8E5DF] bg-white p-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="./assets/studio/studio_wall_quote.jpg"
                  alt="Mural no estúdio Twist Pilates em Campo Grande com citação de Joseph Pilates"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium">
                  Parede do estúdio Twist Pilates com a citação de Joseph Pilates e aparelhos ao fundo.
                </div>
              </div>
            </div>

            {/* Quote Pill */}
            <div className="absolute -bottom-6 right-4 sm:right-8 bg-[#4E216B] text-white p-4 sm:p-5 rounded-2xl shadow-xl max-w-xs sm:max-w-sm hidden sm:block border border-[#6C2E94]">
              <Quote className="w-6 h-6 text-[#9BD444] mb-2 opacity-80" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed italic text-white/95">
                "{studioData.quote.text}"
              </p>
              <span className="block text-[11px] font-bold text-[#9BD444] mt-2">
                — {studioData.quote.author}
              </span>
            </div>
          </div>

          {/* Factual Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#231230] leading-snug mb-5">
              Equipamentos de referência e atenção aos mínimos movimentos
            </h3>
            
            <p className="text-[#5F5B66] text-base leading-relaxed mb-6">
              No Twist Pilates, as aulas utilizam o método Pilates em sua essência: movimentos inteligentes, controlados e com resistência mecânica suave de molas em aparelhos de madeira nobre.
            </p>

            <ul className="space-y-3.5 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C9B2E] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#4A4550]">
                  <strong>Aparelhos Kauffer:</strong> Fabricados com madeira maciça selecionada, garantindo ergonomia e estabilidade absoluta em cada exercício.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C9B2E] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#4A4550]">
                  <strong>Ambiente Climatizado & Acolhedor:</strong> Sala arejada, ampla iluminação natural, tatames limpos e espaço planejado sem aglomeração.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#6C9B2E] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#4A4550]">
                  <strong>Orientação Confiável:</strong> Acompanhamento contínuo da respiração, alinhamento biomecânico e respeito ao limite do seu corpo.
                </span>
              </li>
            </ul>

            <div>
              <a
                href={studioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#EBF0E8] hover:bg-[#D7E3D2] text-[#35134A] font-bold text-sm px-6 py-3 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#6C9B2E]" />
                <span>Conversar com a Equipe no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

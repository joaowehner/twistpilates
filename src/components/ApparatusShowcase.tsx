import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { studioData } from '../data/studioData';

export const ApparatusShowcase: React.FC = () => {
  const apparatusCards = [
    {
      ...studioData.apparatus[0],
      img: "./assets/studio/reformer_lunge.jpg",
      tag: "Reformer"
    },
    {
      ...studioData.apparatus[1],
      img: "./assets/studio/cadillac_inversion.jpg",
      tag: "Cadillac"
    },
    {
      ...studioData.apparatus[2],
      img: "./assets/studio/ladder_barrel_arch.jpg",
      tag: "Ladder Barrel"
    },
    {
      ...studioData.apparatus[3],
      img: "./assets/studio/cadillac_magic_circle.jpg",
      tag: "Step Barrel & Acessórios"
    }
  ];

  return (
    <section id="aparelhos" className="py-20 lg:py-28 bg-white border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs font-bold uppercase tracking-wider mb-3">
              Equipamentos de Qualidade
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231230] tracking-tight mb-3">
              Estrutura completa em madeira nobre
            </h2>
            <p className="text-base text-[#5F5B66] leading-relaxed">
              Equipamentos desenvolvidos para guiar e apoiar o corpo com precisão milimétrica, proporcionando segurança em cada fase do seu treino.
            </p>
          </div>

          <a
            href={studioData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#4E216B] hover:text-[#35134A] transition-colors self-start md:self-auto"
          >
            <span>Agendar aula nos aparelhos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid of 4 Apparatus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {apparatusCards.map((item) => (
            <div 
              key={item.id}
              className="group flex flex-col bg-[#FAF9F6] rounded-2xl overflow-hidden border border-[#E8E5DF] hover:border-[#4E216B]/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container with Exact Aspect Ratio */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#2D2A32]">
                <img
                  src={item.img}
                  alt={`Equipamento ${item.name} no estúdio Twist Pilates em Campo Grande MS`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#4E216B]/90 backdrop-blur-xs text-[11px] font-bold text-[#9BD444] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9BD444] block mb-0.5">
                    {item.highlight}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between grow">
                <p className="text-xs sm:text-sm text-[#5F5B66] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-[#E8E5DF]/70">
                  <span className="text-[11px] font-bold text-[#35134A] uppercase tracking-wider block mb-2">
                    Benefícios diretos:
                  </span>
                  <ul className="space-y-1.5">
                    {item.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#4A4550]">
                        <Check className="w-3.5 h-3.5 text-[#6C9B2E] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

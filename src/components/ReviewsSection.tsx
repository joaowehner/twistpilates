import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import { studioData } from '../data/studioData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-20 lg:py-24 bg-white border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs font-bold uppercase tracking-wider mb-3">
              Avaliações Verificadas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231230] tracking-tight mb-3">
              Aprovado com nota máxima no Google
            </h2>
            <p className="text-base text-[#5F5B66] leading-relaxed">
              Transparência total: 100% das avaliações públicas registradas no perfil do Google Maps concederam 5 estrelas ao estúdio.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-[#FAF9F6] p-4 sm:p-5 rounded-2xl border border-[#E8E5DF] flex items-center gap-4 shrink-0 shadow-xs">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-black text-[#4E216B] leading-none block">
                5.0
              </span>
              <div className="flex text-amber-400 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#E8E5DF]" />
            <div>
              <div className="text-xs font-bold text-[#35134A]">Google Maps</div>
              <div className="text-[11px] text-[#5F5B66]">Campo Grande / MS</div>
              <a 
                href={studioData.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#6C9B2E] hover:underline mt-0.5"
              >
                <span>Ver no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studioData.reviews.slice(0, 3).map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#FAF9F6] rounded-2xl p-6 border border-[#E8E5DF] flex flex-col justify-between hover:border-[#4E216B]/30 transition-colors shadow-xs"
            >
              <div>
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6C9B2E] bg-[#EBF0E8] px-2 py-0.5 rounded-md">
                    <CheckCircle className="w-3 h-3" />
                    Verificado
                  </span>
                </div>

                <p className="text-sm text-[#4A4550] leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E5DF]/70 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#35134A] leading-tight">
                    {rev.name}
                  </h3>
                  <span className="text-[11px] text-[#7A7582] block">
                    {rev.date} no Google
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E8D8F0] text-[#4E216B] font-bold text-xs flex items-center justify-center">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Real Reviewers Attribution Line */}
        <div className="mt-8 text-center text-xs text-[#7A7582]">
          Avaliações confirmadas de clientes reais:{' '}
          <span className="font-semibold text-[#4A4550]">
            Leonardo Merlin, Andre Muriano, Vilma Nabhan, Donizetti Pires da Silva e Antonio
          </span>.
        </div>

      </div>
    </section>
  );
};

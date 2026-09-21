import React, { useState } from 'react';
import { Camera, ZoomIn, X, MapPin } from 'lucide-react';
import { studioData, type GalleryImage } from '../data/studioData';

export const PhotographicGallery: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<GalleryImage | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#6C9B2E]" />
              Galeria Autêntica
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231230] tracking-tight mb-3">
              O estúdio em movimento real
            </h2>
            <p className="text-base text-[#5F5B66] leading-relaxed">
              Registros sem fotos genéricas de banco de imagens ou representações fictícias: cada cena retrata nosso espaço, aparelhos e alunas em Campo Grande/MS.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#5F5B66] bg-white px-4 py-2 rounded-xl border border-[#E8E5DF] self-start md:self-auto">
            <MapPin className="w-4 h-4 text-[#6C9B2E]" />
            <span>Ambiente 100% Real • Carandá Bosque</span>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Item 1: Large Vertical Portrait (Cols 1-5) */}
          <div 
            onClick={() => setActiveModalImage(studioData.gallery[0])}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden cursor-pointer bg-[#2D2A32] shadow-md hover:shadow-xl transition-all duration-300 min-h-[480px] lg:min-h-[560px]"
          >
            <img
              src={studioData.gallery[0].src}
              alt={studioData.gallery[0].alt}
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#35134A]">
                {studioData.gallery[0].tag}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
              <div>
                <p className="text-sm font-semibold text-white/95">
                  {studioData.gallery[0].caption}
                </p>
                <span className="text-xs text-[#9BD444]">Ladder Barrel Kauffer</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#4E216B] transition-colors">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Right Column Grid (Cols 6-12) */}
          <div className="md:col-span-7 flex flex-col gap-6">
            
            {/* Item 2: Horizontal Studio Wall Quote (Aspect 16:9 / 4:3) */}
            <div 
              onClick={() => setActiveModalImage(studioData.gallery[1])}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#2D2A32] shadow-md hover:shadow-xl transition-all duration-300 aspect-[16/10] sm:aspect-[16/9]"
            >
              <img
                src={studioData.gallery[1].src}
                alt={studioData.gallery[1].alt}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#35134A]">
                  {studioData.gallery[1].tag}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <p className="text-sm font-semibold text-white/95">
                    {studioData.gallery[1].caption}
                  </p>
                  <span className="text-xs text-[#9BD444]">Mural oficial na parede do estúdio</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#4E216B] transition-colors">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Bottom 2 Vertical Cards in Side-by-Side Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 grow">
              
              {/* Item 3: Reformer Extension */}
              <div 
                onClick={() => setActiveModalImage(studioData.gallery[4])}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#2D2A32] shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/4] sm:aspect-auto"
              >
                <img
                  src={studioData.gallery[4].src}
                  alt={studioData.gallery[4].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#35134A]">
                    {studioData.gallery[4].tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white/95 leading-tight">
                      {studioData.gallery[4].caption}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#4E216B] transition-colors shrink-0">
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

              {/* Item 4: Space Overview (Espaldar + Tatame) */}
              <div 
                onClick={() => setActiveModalImage(studioData.gallery[5])}
                className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#2D2A32] shadow-md hover:shadow-xl transition-all duration-300 aspect-[3/4] sm:aspect-auto"
              >
                <img
                  src={studioData.gallery[5].src}
                  alt={studioData.gallery[5].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#35134A]">
                    {studioData.gallery[5].tag}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white/95 leading-tight">
                      {studioData.gallery[5].caption}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-[#4E216B] transition-colors shrink-0">
                    <ZoomIn className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <div 
          onClick={() => setActiveModalImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-[#1C1B1F] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#4E216B] transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] flex items-center justify-center bg-black/40">
              <img
                src={activeModalImage.src}
                alt={activeModalImage.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#1C1B1F] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
              <div>
                <span className="text-xs font-bold text-[#9BD444] uppercase tracking-wider block mb-1">
                  Twist Pilates • {activeModalImage.tag}
                </span>
                <p className="text-sm sm:text-base font-medium text-white/90">
                  {activeModalImage.caption}
                </p>
              </div>
              <a
                href={studioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#4E216B] hover:bg-[#35134A] text-white text-xs font-bold transition-colors shrink-0"
              >
                Agendar nesta modalidade
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

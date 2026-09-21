import React from 'react';
import { MapPin, Phone, Navigation, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { studioData } from '../data/studioData';

export const LocationMap: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs font-bold uppercase tracking-wider mb-3">
            Onde Estamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231230] tracking-tight mb-4">
            No coração do Carandá Bosque
          </h2>
          <p className="text-base sm:text-lg text-[#5F5B66] leading-relaxed">
            Localização de fácil acesso na Rua Vitório Zeola, com estacionamento tranquilo e atmosfera calma para sua prática.
          </p>
        </div>

        {/* 2-Column: Info Cards & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E5DF] shadow-md">
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EBF0E8] text-[#6C9B2E] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#35134A] mb-3">
                Twist Pilates
              </h3>

              <div className="space-y-4 mb-8 text-sm text-[#4A4550]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4E216B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1D1B20] font-semibold">Endereço Operacional:</strong>
                    <span>Rua Vitório Zeola, nº 810 — Sala 03</span>
                    <span className="block text-xs text-[#5F5B66] mt-0.5">Bairro Carandá Bosque — Campo Grande/MS</span>
                    <span className="block text-xs text-[#5F5B66]">CEP: 79032-360</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#6C9B2E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1D1B20] font-semibold">Telefone & WhatsApp:</strong>
                    <a 
                      href={studioData.whatsappUrl} 
                      className="text-[#4E216B] font-bold hover:underline"
                    >
                      {studioData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#4E216B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1D1B20] font-semibold">Horários de Atendimento:</strong>
                    <span>Sessões personalizadas com agendamento prévio.</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-[#E8E5DF] text-xs text-[#5F5B66]">
                  <strong className="text-[#35134A] block mb-1">Código Plus (Google Maps):</strong>
                  <code className="text-[#4E216B] font-mono font-semibold">{studioData.address.plusCode}</code>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-[#E8E5DF]">
              <a
                href={studioData.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#4E216B] hover:bg-[#35134A] text-white text-sm font-semibold py-3 px-5 rounded-xl transition-all grow"
              >
                <Navigation className="w-4 h-4 text-[#9BD444]" />
                <span>Traçar Rota</span>
              </a>

              <a
                href={studioData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#EBF0E8] hover:bg-[#D7E3D2] text-[#35134A] text-sm font-semibold py-3 px-5 rounded-xl transition-colors grow"
              >
                <MessageCircle className="w-4 h-4 text-[#6C9B2E]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-md border border-[#E8E5DF] bg-white min-h-[380px] lg:min-h-full relative">
            <iframe
              title="Mapa de Localização do Twist Pilates em Campo Grande MS"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.567794303498!2d-54.5714072!3d-20.4410292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e9992d2b2397%3A0x6d04ddc1269a463e!2sTwist%20Pilates!5e0!3m2!1spt-BR!2sbr!4v1726955000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            <a
              href={studioData.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-bold text-[#35134A] shadow-md hover:bg-[#FAF9F6] border border-[#E8E5DF] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Abrir no App Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#6C9B2E]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

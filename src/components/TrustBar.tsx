import React from 'react';
import { Award, Compass, HeartHandshake, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: "Linha Kauffer",
      subtitle: "Aparelhos em madeira nobre e molas de alta precisão"
    },
    {
      icon: Compass,
      title: "Carandá Bosque",
      subtitle: "Rua Vitório Zeola, fácil acesso e estacionamento"
    },
    {
      icon: Star,
      title: "Avaliação 5.0 ⭐",
      subtitle: "Consistência de nota máxima no Google Maps"
    },
    {
      icon: HeartHandshake,
      title: "Cuidado Individual",
      subtitle: "Acompanhamento dedicado à sua postura e saúde"
    }
  ];

  return (
    <section className="bg-white border-y border-[#E8E5DF] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {points.map((pt, index) => {
            const Icon = pt.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F5EEFA] flex items-center justify-center text-[#4E216B] shrink-0 border border-[#E8D8F0]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#35134A] text-base mb-1">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F5B66] leading-relaxed">
                    {pt.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

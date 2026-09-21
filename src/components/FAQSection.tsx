import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { studioData } from '../data/studioData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-[#E8E5DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EBF0E8] text-[#35134A] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#6C9B2E]" />
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#231230] tracking-tight mb-3">
            Perguntas comuns sobre o estúdio
          </h2>
          <p className="text-base text-[#5F5B66]">
            Informações claras para você iniciar sua prática com tranquilidade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {studioData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-[#E8E5DF] overflow-hidden transition-colors bg-[#FAF9F6]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#231230]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white border border-[#E8E5DF] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#4E216B] text-white border-[#4E216B]' : 'text-[#5F5B66]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#5F5B66] leading-relaxed border-t border-[#E8E5DF]/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F5EEFA] border border-[#E8D8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-base text-[#35134A]">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs sm:text-sm text-[#5F5B66] mt-0.5">Nossa equipe responde rapidamente pelo WhatsApp.</p>
          </div>
          <a
            href={studioData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4E216B] hover:bg-[#35134A] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#9BD444]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

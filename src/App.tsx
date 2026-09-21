import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutStudio } from './components/AboutStudio';
import { ApparatusShowcase } from './components/ApparatusShowcase';
import { PhotographicGallery } from './components/PhotographicGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationMap } from './components/LocationMap';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1D1B20]">
      <Header />
      <main className="grow">
        <Hero />
        <TrustBar />
        <AboutStudio />
        <ApparatusShowcase />
        <PhotographicGallery />
        <ReviewsSection />
        <LocationMap />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

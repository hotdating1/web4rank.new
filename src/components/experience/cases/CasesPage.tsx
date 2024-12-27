import React from 'react';
import { Hero } from './sections/Hero';
import { SuccessHighlights } from './sections/SuccessHighlights';
import { InteractiveResults } from './sections/InteractiveResults';
import { VideoSection } from './sections/VideoSection';
import { Metrics } from './sections/Metrics';
import { ClientTestimonials } from './sections/ClientTestimonials';
import { ContactForm } from './sections/ContactForm';
import { QualityGuarantee } from './sections/QualityGuarantee';
import { Footer } from '../../Footer';

export const CasesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <SuccessHighlights />
      <InteractiveResults />
      <VideoSection />
      <Metrics />
      <ClientTestimonials />
      <ContactForm />
      <QualityGuarantee />
      <Footer />
    </div>
  );
};
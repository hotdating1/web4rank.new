import React from 'react';
import { Hero } from './sections/Hero';
import { FAQSection } from './sections/FAQSection';
import { CTASection } from './sections/CTASection';
import { Footer } from '../Footer';

export const FAQPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};
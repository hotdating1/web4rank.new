import React from 'react';
import { Hero } from './sections/Hero';
import { ContactForm } from './sections/ContactForm';
import { QuickContact } from './sections/QuickContact';
import { Footer } from '../Footer';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ContactForm />
      <QuickContact />
      <Footer />
    </div>
  );
};
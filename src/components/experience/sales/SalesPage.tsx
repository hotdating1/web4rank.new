import React from 'react';
import { Hero } from './sections/Hero';
import { Solutions } from './sections/Solutions';
import { Process } from './sections/Process';
import { VideoDemo } from './sections/VideoDemo';
import { Metrics } from './sections/Metrics';
import { ContactForm } from './sections/ContactForm';
import { Footer } from '../../Footer';

export const SalesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Solutions />
      <Process />
      <VideoDemo />
      <Metrics />
      <ContactForm />
      <Footer />
    </div>
  );
};
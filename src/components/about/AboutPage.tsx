import React from 'react';
import { Hero } from './sections/Hero';
import { Mission } from './sections/Mission';
import { Values } from './sections/Values';
import { Story } from './sections/Story';
import { Footer } from '../Footer';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Mission />
      <Values />
      <Story />
      <Footer />
    </div>
  );
};
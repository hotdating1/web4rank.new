import React from 'react';
import { Hero } from '../components/hero/Hero';
import { Experiences } from '../components/experience/Experiences';
import { ActionButtons } from '../components/cta/ActionButtons';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Experiences />
      <ActionButtons />
      <Footer />
    </>
  );
};
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { AnimatedGradientText } from '../ui/AnimatedGradientText';
import { Stats } from './Stats';
import { CONTACT } from '../../utils/constants';

export const HeroContent = () => {
  return (
    <div className="flex-1 space-y-8 px-4 sm:px-0">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <AnimatedGradientText>Transforme seu</AnimatedGradientText>
          <br />
          <span className="text-white">Negócio Digital</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
          Soluções tecnológicas de alto impacto para empresas que buscam excelência
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="primary" 
          icon={<ArrowRight className="w-4 h-4" />}
          className="animate-fade-in w-full sm:w-auto"
          style={{ animationDelay: '200ms' }}
          href={CONTACT.WHATSAPP_URL}
        >
          Agendar Reunião
        </Button>
        <Button 
          variant="secondary"
          className="animate-fade-in w-full sm:w-auto"
          style={{ animationDelay: '300ms' }}
        >
          Portfólio
        </Button>
      </div>

      <Stats />
    </div>
  );
};
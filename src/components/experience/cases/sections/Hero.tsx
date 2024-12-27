import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { ArrowRight } from 'lucide-react';
import { GradientText } from '../../../ui/GradientText';

export const Hero = () => {
  return (
    <Section className="min-h-[80vh] flex items-center justify-center" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <GradientText>Histórias de</GradientText>
            <br />
            <span>Transformação Digital</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Veja como ajudamos empresas a alcançarem novos patamares com soluções inovadoras
          </p>
        </div>

        <Button 
          variant="primary"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Descubra Como Podemos Transformar Seu Negócio
        </Button>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-pulse" />
        </div>
      </div>
    </Section>
  );
};
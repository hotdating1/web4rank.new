import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <Section className="min-h-[80vh] flex items-center" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Transforme Tarefas Manuais
            </span>
            <br />
            <span>em Resultados Automatizados</span>
          </h1>
          <p className="text-xl text-gray-400">
            Simplifique processos, economize tempo e potencialize o crescimento do seu negócio
          </p>
        </div>

        <Button 
          variant="primary"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => document.getElementById('video-demo')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Experimentar Agora
        </Button>

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
        </div>
      </div>
    </Section>
  );
};
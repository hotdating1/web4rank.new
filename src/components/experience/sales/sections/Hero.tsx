import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { ArrowRight } from 'lucide-react';
import { GradientText } from '../../../ui/GradientText';

export const Hero = () => {
  return (
    <Section className="min-h-[80vh] flex items-center" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <GradientText>Escale suas Vendas</GradientText>
            <br />
            <span>com Inteligência e Eficiência</span>
          </h1>
          <p className="text-xl text-gray-400">
            Estratégias avançadas para atrair, converter e fidelizar clientes no digital.
          </p>
        </div>

        <Button 
          variant="primary"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Descubra o Potencial da Sua Escala
        </Button>
      </div>
    </Section>
  );
};
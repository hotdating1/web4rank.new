import React from 'react';
import { Section } from '../../ui/Section';
import { GradientText } from '../../ui/GradientText';

export const Hero = () => {
  return (
    <Section className="min-h-[60vh] flex items-center" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <GradientText>Transformando Negócios Digitais</GradientText>
            <br />
            <span>com Inovação e Excelência</span>
          </h1>
          <p className="text-lg text-gray-400">
            Na Web4Rank, acreditamos que o digital é o caminho para o crescimento exponencial. 
            Combinamos tecnologia, estratégia e performance para entregar soluções que superam 
            expectativas e colocam nossos clientes no topo.
          </p>
        </div>
      </div>
    </Section>
  );
};
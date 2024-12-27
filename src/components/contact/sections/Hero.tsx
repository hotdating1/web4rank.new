import React from 'react';
import { Section } from '../../ui/Section';
import { GradientText } from '../../ui/GradientText';

export const Hero = () => {
  return (
    <Section className="py-24" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          <GradientText>Estamos Aqui para Ajudar Você!</GradientText>
        </h1>
        <p className="text-xl text-gray-400">
          Se você tem dúvidas, sugestões ou precisa de mais informações sobre nossos serviços, 
          estamos prontos para ouvir e ajudar. Seja para agendar uma reunião, esclarecer alguma 
          questão ou iniciar uma parceria, nossa equipe está à disposição para oferecer o suporte 
          que você precisa.
        </p>
      </div>
    </Section>
  );
};
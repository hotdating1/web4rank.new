import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { ArrowRight } from 'lucide-react';
import { GradientText } from '../../../ui/GradientText';
import { CONTACT } from '../../../../utils/constants';

export const Hero = () => {
  return (
    <Section className="min-h-[80vh] flex items-center" pattern>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <GradientText>Performance</GradientText>
            <br />
            <span>Desenvolva Suas Habilidades e Supere Limites</span>
          </h1>
          <p className="text-xl text-gray-400">
            Nosso espaço de treinamentos foi criado para profissionais e empreendedores 
            que buscam excelência. Aqui, você encontra cursos práticos e transformadores 
            que aceleram seus resultados no mundo digital.
          </p>
        </div>

        <Button 
          variant="primary"
          icon={<ArrowRight className="w-5 h-5" />}
          href={CONTACT.WHATSAPP_URL}
          className="animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          Quero Aprender Agora
        </Button>
      </div>
    </Section>
  );
};
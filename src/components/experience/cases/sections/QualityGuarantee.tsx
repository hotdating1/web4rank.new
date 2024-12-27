import React from 'react';
import { Section } from '../../../ui/Section';
import { Button } from '../../../ui/Button';
import { GradientText } from '../../../ui/GradientText';
import { ArrowRight } from 'lucide-react';

export const QualityGuarantee = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">
            <GradientText>Cada cliente é único,</GradientText>
          </h2>
          <p className="text-xl text-gray-400">
            e cada solução é personalizada para gerar os melhores resultados.
            Vamos juntos transformar sua história?
          </p>
        </div>

        <Button 
          variant="primary"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Vamos Conversar Sobre o Sucesso do Seu Negócio!
        </Button>

        <div className="pt-12 border-t border-gray-800">
          <p className="text-gray-400">
            Soluções premiadas e reconhecidas no mercado.
            <br />
            Junte-se a centenas de empresas que já transformaram seus negócios.
          </p>
        </div>
      </div>
    </Section>
  );
};
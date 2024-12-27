import React from 'react';
import { Section } from '../../ui/Section';
import { Button } from '../../ui/Button';
import { MessageCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold">Ainda tem dúvidas? Vamos Conversar!</h2>
        <p className="text-xl text-gray-400">
          Nossa equipe está pronta para esclarecer todas as suas dúvidas e 
          ajudar você a escolher a melhor solução para o seu negócio.
        </p>
        <Button 
          variant="primary"
          icon={<MessageCircle className="w-5 h-5" />}
        >
          Agendar Reunião
        </Button>
      </div>
    </Section>
  );
};
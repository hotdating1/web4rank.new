import React from 'react';
import { Section } from '../../ui/Section';
import { Rocket, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '../../ui/Button';
import { MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Estratégia Premium',
    description: 'Soluções pensadas para negócios que buscam excelência'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Inovação Contínua',
    description: 'Estamos sempre à frente das tendências tecnológicas'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Foco em Performance',
    description: 'Métricas claras, resultados tangíveis'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Experiência Personalizada',
    description: 'Cada cliente é único, e nossa entrega reflete isso'
  }
];

export const WhyChooseUs = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Por Que Escolher a Web4Rank?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg space-y-4"
            >
              <div className="text-cyan-400">{reason.icon}</div>
              <h3 className="text-lg font-semibold">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold">
            Pronto para elevar o seu negócio digital ao próximo nível?
          </h3>
          <Button 
            variant="primary"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Agendar Reunião
          </Button>
        </div>
      </div>
    </Section>
  );
};
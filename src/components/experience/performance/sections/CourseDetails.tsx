import React from 'react';
import { Section } from '../../../ui/Section';
import { Check } from 'lucide-react';

const learningPoints = [
  'Como escolher a melhor plataforma e hospedagem para seu site',
  'Estrutura ideal para sites que vendem e encantam visitantes',
  'Desenvolvimento rápido com ferramentas intuitivas e práticas',
  'Otimização para SEO: apareça no Google e atraia mais clientes',
  'Design profissional sem precisar de habilidades avançadas',
  'Técnicas para tornar seu site rápido, responsivo e funcional'
];

export const CourseDetails = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Site Express</h2>
          <p className="text-2xl text-cyan-400 font-semibold">
            Construa Sites Profissionais em Horas, Não em Dias!
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">O que você vai aprender:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
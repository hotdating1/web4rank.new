import React from 'react';
import { Section } from '../../../ui/Section';
import { Zap, Lightbulb, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Velocidade',
    description: 'Não perca tempo. Domine o processo e tenha sites prontos em tempo recorde.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Praticidade',
    description: 'Curso direto ao ponto, com linguagem simples e exemplos reais.'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Resultados',
    description: 'Atraia clientes, aumente suas vendas e tenha presença online de forma profissional.'
  }
];

export const Benefits = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center">Por que investir no Site Express?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="space-y-4">
                <div className="text-cyan-400">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
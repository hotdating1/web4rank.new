import React from 'react';
import { Section } from '../../../ui/Section';
import { Search, PenTool, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Diagnóstico de Marca',
    description: 'Identificamos como sua marca é percebida'
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: 'Planejamento Estratégico',
    description: 'Criamos campanhas personalizadas'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Execução e Medição',
    description: 'Colocamos sua marca no mapa e acompanhamos os resultados'
  }
];

export const Process = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Uma Estratégia Clara e Personalizada</h2>
          <p className="text-xl text-gray-400">Como trabalhamos sua marca</p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                  <div className="text-cyan-400">{step.icon}</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
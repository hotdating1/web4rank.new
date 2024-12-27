import React from 'react';
import { Section } from '../../../ui/Section';
import { Search, GitBranch, Cog, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Diagnóstico Inicial',
    description: 'Entendemos seu público e metas'
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'Planejamento do Funil',
    description: 'Estruturamos a jornada ideal'
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Implementação Técnica',
    description: 'Criamos e otimizamos as etapas'
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: 'Métricas e Ajustes',
    description: 'Monitoramos para maximizar resultados'
  }
];

export const Process = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Uma Jornada Sob Medida para o Seu Negócio</h2>
          <p className="text-xl text-gray-400">Como Estruturamos Seu Funil?</p>
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
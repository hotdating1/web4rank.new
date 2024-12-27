import React from 'react';
import { Section } from '../../../ui/Section';
import { Search, Cog, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Diagnóstico Personalizado',
    description: 'Identificamos suas oportunidades de crescimento'
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Implementação Estratégica',
    description: 'Construímos o funil e otimizamos as etapas'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Resultados e Escala',
    description: 'Monitoramos e ajustamos para crescimento constante'
  }
];

export const Process = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Transforme Seu Processo de Vendas em 3 Passos</h2>
          <p className="text-xl text-gray-400">
            Uma metodologia comprovada para escalar seu negócio
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step Number */}
                <div className="absolute left-[50%] transform -translate-x-1/2 hidden md:block">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[calc(50%-2rem)] p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-cyan-400">{step.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
import React from 'react';
import { Section } from '../../../ui/Section';
import { TrendingUp, Clock, Target } from 'lucide-react';

const metrics = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '+300%',
    label: 'Aumento na geração de leads'
  },
  {
    icon: <Target className="w-8 h-8" />,
    value: '+70%',
    label: 'Conversão em vendas'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: '-50%',
    label: 'Tempo de fechamento'
  }
];

export const Metrics = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Nossos Resultados Falam Alto</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="text-cyan-400 flex justify-center">{metric.icon}</div>
              <div>
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {metric.value}
                </p>
                <p className="text-gray-400">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
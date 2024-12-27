import React from 'react';
import { Section } from '../../../ui/Section';
import { Users, TrendingUp, Star, Clock } from 'lucide-react';

const metrics = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '150+',
    label: 'Empresas atendidas'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: '500k+',
    label: 'Leads gerados'
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: '98%',
    label: 'Satisfação de clientes'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: '10+',
    label: 'Anos de experiência'
  }
];

export const Metrics = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Nossos Números Falam Por Si</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
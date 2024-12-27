import React from 'react';
import { Section } from '../../../ui/Section';
import { TrendingUp, DollarSign, Database, Award } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '+50% mais chances de ser lembrado',
    description: 'Destaque-se com uma presença digital memorável'
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Reduz custos com materiais',
    description: 'Elimine gastos com impressões'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Integração com CRM',
    description: 'Automatize a captura de leads'
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Melhora percepção da marca',
    description: 'Transmita inovação e profissionalismo'
  }
];

export const FeatureHighlights = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Conexões que Geram Negócios</h2>
          <p className="text-xl text-gray-400">
            Benefícios reais para seu networking profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex gap-6">
                <div className="text-cyan-400">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
import React from 'react';
import { Section } from '../../ui/Section';
import { Award, Lightbulb, Users, Eye, Target } from 'lucide-react';

const values = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Excelência',
    description: 'Buscamos sempre o mais alto padrão de entrega'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Inovação',
    description: 'Soluções modernas que impulsionam o seu negócio'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Parceria',
    description: 'Crescemos junto com nossos clientes'
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Transparência',
    description: 'Processos claros, comunicação aberta'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Resultados',
    description: 'Nosso foco é gerar impacto real e mensurável'
  }
];

export const Values = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center">Nossos Valores</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="flex gap-6">
                <div className="text-cyan-400">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
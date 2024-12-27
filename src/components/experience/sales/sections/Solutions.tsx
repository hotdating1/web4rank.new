import React from 'react';
import { Section } from '../../../ui/Section';
import { GitBranch, Zap, Users, MessageSquare } from 'lucide-react';
import { Card } from '../../../ui/Card';

const solutions = [
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'Funis Personalizados',
    description: 'Criamos jornadas do cliente que convertem'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Automação de Leads',
    description: 'Ganhe tempo e eficiência'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Segmentação Avançada',
    description: 'Atinja o cliente certo na hora certa'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Copy Persuasiva',
    description: 'Linguagem estratégica para alta conversão'
  }
];

export const Solutions = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Metodologia Comprovada para Resultados Consistentes</h2>
          <p className="text-xl text-gray-400">
            Soluções que transformam visitantes em clientes fiéis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex gap-6">
                <div className="text-cyan-400">{solution.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
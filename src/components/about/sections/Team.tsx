import React from 'react';
import { Section } from '../../ui/Section';
import { Rocket, Code, Palette, GitBranch } from 'lucide-react';

const teamRoles = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Estrategistas de Marketing Digital',
    description: 'Especialistas em crescimento e performance'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Desenvolvedores',
    description: 'Especialistas em automação e performance'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Designers',
    description: 'Focados em experiência e estética premium'
  },
  {
    icon: <GitBranch className="w-8 h-8" />,
    title: 'Especialistas em Funis',
    description: 'Experts em conversão e escala de vendas'
  }
];

export const Team = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Equipe Web4Rank</h2>
          <p className="text-xl text-gray-400">
            Nossos especialistas unem paixão, experiência e inovação para 
            transformar desafios em oportunidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamRoles.map((role, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center space-y-4"
            >
              <div className="text-cyan-400 flex justify-center">{role.icon}</div>
              <h3 className="text-lg font-semibold">{role.title}</h3>
              <p className="text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
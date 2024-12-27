import React from 'react';
import { Section } from '../../../ui/Section';
import { Card } from '../../../ui/Card';
import { TrendingUp, Users, Zap } from 'lucide-react';

const cases = [
  {
    sector: 'E-commerce',
    challenge: 'Baixa conversão em leads',
    solution: 'Automação e Funil de Vendas',
    results: '+50% de leads em 30 dias',
    quote: 'A transformação foi imediata e os resultados superaram nossas expectativas.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    sector: 'Startup de Tecnologia',
    challenge: 'Processos manuais ineficientes',
    solution: 'Sistema de Automação Integrado',
    results: 'Tempo de resposta reduzido em 70%',
    quote: 'Agora conseguimos focar no crescimento do negócio.',
    icon: <Zap className="w-8 h-8" />
  },
  {
    sector: 'Agência de Marketing',
    challenge: 'Dificuldade em escalar operações',
    solution: 'Plataforma de Gestão Automatizada',
    results: '3x mais clientes atendidos',
    quote: 'A escalabilidade que precisávamos com a qualidade que sempre buscamos.',
    icon: <Users className="w-8 h-8" />
  }
];

export const SuccessHighlights = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Resultados Reais, Impacto Mensurável</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="space-y-6">
                <div className="text-cyan-400">{item.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{item.sector}</h3>
                  <div className="space-y-2">
                    <p className="text-gray-400"><span className="text-gray-300">Desafio:</span> {item.challenge}</p>
                    <p className="text-gray-400"><span className="text-gray-300">Solução:</span> {item.solution}</p>
                    <p className="text-cyan-400 font-semibold">{item.results}</p>
                  </div>
                  <blockquote className="text-gray-400 italic">"{item.quote}"</blockquote>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
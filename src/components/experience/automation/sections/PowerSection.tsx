import React from 'react';
import { Section } from '../../../ui/Section';
import { Card } from '../../../ui/Card';
import { Box, MessageCircle, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Box className="w-8 h-8" />,
    title: 'Processos Automatizados',
    description: 'Controle de estoque, relatórios e integrações sem erros'
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Conversas Inteligentes',
    description: 'Responda clientes 24/7 com chatbots personalizados'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Vendas Escaláveis',
    description: 'Automatize funis e campanhas para gerar conversões consistentes'
  }
];

export const PowerSection = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <p className="text-xl text-gray-300 leading-relaxed">
            Imagine uma operação onde tudo flui automaticamente. Desde o primeiro contato 
            com o cliente até o acompanhamento pós-venda, as automações trabalham enquanto 
            você se concentra no que realmente importa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg">
                  <div className="text-cyan-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
import React from 'react';
import { Brain, ShoppingBag, Award, GitBranch, CreditCard, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  { icon: <Brain className="w-8 h-8" />, title: 'Automações', desc: 'Otimize processos com IA' },
  { icon: <Award className="w-8 h-8" />, title: 'Portfólio', desc: 'Cases de sucesso' },
  { icon: <CreditCard className="w-8 h-8" />, title: 'Cartão Digital', desc: 'Cartão de visitas virtual + pulseira NFC' },
  { icon: <ShoppingBag className="w-8 h-8" />, title: 'Vendas Online', desc: 'E-commerce avançado' },
  { icon: <Users className="w-8 h-8" />, title: 'Reconhecimento', desc: 'Construção de marca' },
  { icon: <GitBranch className="w-8 h-8" />, title: 'Funis e Processos', desc: 'Otimização de fluxos' },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
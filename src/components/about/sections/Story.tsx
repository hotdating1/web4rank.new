import React from 'react';
import { Section } from '../../ui/Section';

export const Story = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Nossa História</h2>
        <div className="text-lg text-gray-400 space-y-6">
          <p>
            A Web4Rank nasceu com um propósito claro: ajudar empresas a alcançarem 
            novos patamares no digital. Com anos de experiência em automação, 
            performance, funis de conversão e estratégias de marca, percebemos que 
            o mercado exigia mais que soluções genéricas — precisava de resultados 
            personalizados e premium.
          </p>
          <p>
            Hoje, somos uma equipe de profissionais apaixonados pela tecnologia e 
            pelo sucesso de nossos clientes, oferecendo uma abordagem inovadora 
            que une estratégia, design e performance.
          </p>
        </div>
      </div>
    </Section>
  );
};
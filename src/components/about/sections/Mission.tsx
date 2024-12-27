import React from 'react';
import { Section } from '../../ui/Section';

export const Mission = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Nossa Missão</h2>
            <p className="text-lg text-gray-400">
              Capacitar empresas a crescerem no digital com soluções inovadoras, 
              processos otimizados e estratégias de alto impacto que geram resultados reais.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Nossa Visão</h2>
            <p className="text-lg text-gray-400">
              Ser referência em soluções digitais de alto valor, reconhecida pela 
              excelência, inovação e pelo impacto positivo na performance dos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
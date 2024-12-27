import React from 'react';
import { Section } from '../../ui/Section';
import { FAQAccordion } from '../components/FAQAccordion';

const faqItems = [
  {
    question: 'Quais são os serviços oferecidos pela Web4Rank?',
    answer: `Oferecemos soluções tecnológicas de alto impacto, incluindo:
    
    • Automações: Simplifique processos e otimize conversas
    • Cartão de Visitas Virtual: Conecte-se com estilo e inovação
    • Reconhecimento de Marca: Atraia novos e melhores clientes
    • Funis de Conversão: Estruture jornadas estratégicas que vendem
    • Escala em Vendas: Aumente suas conversões com estratégias inteligentes
    • Performance: Treinamentos personalizados para maximizar resultados`
  },
  {
    question: 'O que são automações e como elas podem ajudar meu negócio?',
    answer: `As automações são sistemas criados para otimizar tarefas repetitivas e processos, como:

    • Atendimento ao cliente com chatbots e respostas automáticas
    • Envio de e-mails e mensagens segmentadas
    • Integração de plataformas para sincronizar dados e gerar relatórios

    Benefício: Você economiza tempo, aumenta a eficiência e garante uma experiência melhor para seus clientes.`
  },
  // Add more FAQ items...
];

export const FAQSection = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-3xl mx-auto space-y-8">
        {faqItems.map((item, index) => (
          <FAQAccordion key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};
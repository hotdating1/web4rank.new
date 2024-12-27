import React from 'react';
import { Section } from '../../../ui/Section';
import { Card } from '../../../ui/Card';

const testimonials = [
  {
    content: "A implementação das soluções superou todas as nossas expectativas. O ROI foi alcançado em menos de 3 meses.",
    author: "Ana Silva",
    role: "CEO",
    company: "TechStart",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    content: "A automação dos processos nos permitiu escalar o negócio mantendo a qualidade do atendimento.",
    author: "Carlos Santos",
    role: "Diretor de Operações",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80"
  }
];

export const ClientTestimonials = () => {
  return (
    <Section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">O Que Nossos Parceiros Dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex flex-col h-full">
                <blockquote className="flex-1 mb-6">
                  <p className="text-lg text-gray-300 italic">"{testimonial.content}"</p>
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
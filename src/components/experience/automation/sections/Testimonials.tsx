import React from 'react';
import { Section } from '../../../ui/Section';
import { Star } from 'lucide-react';
import { Button } from '../../../ui/Button';

const testimonials = [
  {
    quote: "A automação transformou completamente nosso processo de vendas. Aumentamos em 3x nossa capacidade de atendimento.",
    author: "Maria Silva",
    role: "CEO, TechVentures"
  },
  {
    quote: "Reduzimos em 70% o tempo gasto em tarefas administrativas. Agora focamos no que realmente importa.",
    author: "João Santos",
    role: "Diretor de Operações, InnovateX"
  }
];

export const Testimonials = () => {
  return (
    <Section className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-2">
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-3xl font-semibold">Soluções premiadas e reconhecidas no mercado</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <blockquote className="space-y-4">
                <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
                <footer className="text-gray-400">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p>{testimonial.role}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary">
            Não deixe o futuro esperar. Automatize agora.
          </Button>
        </div>
      </div>
    </Section>
  );
};
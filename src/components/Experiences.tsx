import React, { useState } from 'react';
import { Brain, ShoppingBag, Award, GitBranch, CreditCard, Users, ArrowLeft, ArrowRight } from 'lucide-react';

const experiences = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'Automações',
    desc: 'Otimize processos com IA',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: 'Portfólio',
    desc: 'Cases de sucesso',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    icon: <CreditCard className="w-12 h-12" />,
    title: 'Cartão Digital',
    desc: 'Cartão de visitas virtual + pulseira NFC',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80'
  },
  {
    icon: <ShoppingBag className="w-12 h-12" />,
    title: 'Vendas Online',
    desc: 'E-commerce avançado',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Reconhecimento',
    desc: 'Construção de marca',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    icon: <GitBranch className="w-12 h-12" />,
    title: 'Funis e Processos',
    desc: 'Otimização de fluxos',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80'
  }
];

export const Experiences = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const experiencesPerPage = 2;
  const totalPages = Math.ceil(experiences.length / experiencesPerPage);

  const currentExperiences = experiences.slice(
    currentPage * experiencesPerPage,
    (currentPage + 1) * experiencesPerPage
  );

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold">Experiências</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
              disabled={currentPage === 0}
              className="p-2 rounded-full border border-gray-700 disabled:opacity-50 hover:bg-gray-800 transition-all"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full border border-gray-700 disabled:opacity-50 hover:bg-gray-800 transition-all"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentExperiences.map((exp, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl" />
              <div className="relative bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-gray-800">
                    <div className="text-cyan-400">{exp.icon}</div>
                  </div>
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.desc}</p>
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
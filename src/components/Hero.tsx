import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Transforme seu
              </span>
              <br />
              <span className="text-white">Negócio Digital</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Soluções tecnológicas de alto impacto para empresas que buscam excelência
            </p>
          </div>
          <div className="flex gap-4">
            <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition-all">
              <span>Agendar Reunião</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-all">
              Portfólio
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80"
              alt="Tech Visual"
              className="rounded-lg border border-gray-800 shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
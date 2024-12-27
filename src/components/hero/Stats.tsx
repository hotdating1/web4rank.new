import React from 'react';

const stats = [
  { value: '150+', label: 'Projetos Entregues', color: 'text-cyan-400' },
  { value: '98%', label: 'Clientes Satisfeitos', color: 'text-blue-400' },
  { value: '24/7', label: 'Suporte Dedicado', color: 'text-indigo-400' }
];

export const Stats = () => {
  return (
    <div 
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-800 animate-fade-in" 
      style={{ animationDelay: '400ms' }}
    >
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
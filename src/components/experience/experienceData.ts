import { LucideIcon } from 'lucide-react';

export type ExperienceType = {
  icon: keyof typeof import('lucide-react');
  title: string;
  desc: string;
  image: string;
  path: string;
};

export const experiences: ExperienceType[] = [
  {
    icon: 'Brain',
    title: 'Automações',
    desc: 'Simplifique tarefas e ganhe tempo',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80',
    path: '/automacao'
  },
  {
    icon: 'Award',
    title: 'Cases de Sucesso',
    desc: 'Histórias que mostram o impacto real',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    path: '/cases'
  },
  {
    icon: 'CreditCard',
    title: 'Cartão de Visitas Virtual',
    desc: 'Sua presença digital em um toque',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    path: '/cartao-virtual'
  },
  {
    icon: 'TrendingUp',
    title: 'Escala em Vendas',
    desc: 'Aumente seu faturamento de forma consistente',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80',
    path: '/vendas'
  },
  {
    icon: 'Users',
    title: 'Reconhecimento de Marca',
    desc: 'Construa uma marca memorável',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    path: '/branding'
  },
  {
    icon: 'GitBranch',
    title: 'Funis de Conversão',
    desc: 'Otimize sua jornada de vendas',
    image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80',
    path: '/funis'
  }
];
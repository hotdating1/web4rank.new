export const ROUTES = {
  HOME: '/',
  AUTOMATION: '/automacao',
  CASES: '/cases',
  VIRTUAL_CARD: '/cartao-virtual',
  SALES: '/vendas',
  BRANDING: '/branding',
  FUNNELS: '/funis',
  PERFORMANCE: '/performance',
  FAQ: '/faq',
  ABOUT: '/sobre',
  BLOG: '/blog',
  CONTACT: '/contato'
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];
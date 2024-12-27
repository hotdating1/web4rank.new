// Common constants used across components
export const CONTACT_FORM_FIELDS = {
  name: 'Nome',
  company: 'Empresa',
  whatsapp: 'WhatsApp',
  email: 'E-mail'
} as const;

export const ROUTES = {
  home: '/',
  automation: '/automacao',
  cases: '/cases',
  virtualCard: '/cartao-virtual',
  sales: '/vendas',
  branding: '/branding',
  funnels: '/funis',
  faq: '/faq'
} as const;

export const COMPANY_INFO = {
  name: 'Sua Empresa',
  year: new Date().getFullYear()
} as const;

export const CONTACT = {
  WHATSAPP_URL: 'https://wa.me/5521971415153'
} as const;
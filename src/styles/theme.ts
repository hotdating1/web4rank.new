export const theme = {
  colors: {
    primary: {
      from: '#22d3ee', // cyan-400
      to: '#3b82f6', // blue-500
    },
    background: {
      dark: '#000000',
      card: '#111827', // gray-900
    },
    text: {
      primary: '#ffffff',
      secondary: '#9ca3af', // gray-400
    }
  },
  transitions: {
    default: 'all 0.3s ease-in-out',
  }
} as const;
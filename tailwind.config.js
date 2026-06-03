/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './src/lib/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          dark: '#0a0a0a',
          light: '#FAFAF7',
        },
        ink: {
          dark: '#F0EEE6',
          light: '#111110',
        },
        forge: {
          orange: '#FF6B35',
          cyan: '#00D4FF',
          violet: '#7B61FF',
          yellow: '#FFD23F',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'gradient-forge':
          'linear-gradient(135deg, #FF6B35 0%, #00D4FF 50%, #7B61FF 100%)',
        'gradient-warm':
          'linear-gradient(135deg, #7B61FF 0%, #FFD23F 100%)',
        'hero-fallback':
          'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0,212,255,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 50% at 30% 70%, rgba(255,107,53,0.12) 0%, transparent 50%), #0a0a0a',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 107, 53, 0.35)',
        'glow-cyan': '0 0 40px rgba(0, 212, 255, 0.35)',
      },
      animation: {
        'shine-sweep': 'shine-sweep 0.8s ease-out forwards',
      },
      keyframes: {
        'shine-sweep': {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
      },
    },
  },
  plugins: [],
};

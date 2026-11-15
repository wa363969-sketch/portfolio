/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a13',
          900: '#0a0f1d',
          850: '#0d1527',
          800: '#111b33',
          700: '#1a2749',
          600: '#23345d'
        },
        electric: {
          400: '#38bdf8',
          500: '#00d2ff',
          600: '#0284c7',
          neon: '#00f0ff'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 210, 255, 0.25)',
        'glow-md': '0 0 30px rgba(0, 210, 255, 0.35)',
        'glow-lg': '0 0 50px rgba(0, 210, 255, 0.45)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

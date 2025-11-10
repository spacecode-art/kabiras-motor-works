/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#1A202C',
        'brand-charcoal': '#2D3748',
        'brand-grey': '#718096',
        'brand-light-gray': '#EDF2F7',
        'brand-orange': '#DD6B20',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'kenburns': 'kenburns 15s ease-out infinite alternate',
      },
      keyframes: {
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'kenburns': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-1%, 2%)' },
        }
      }
    }
  },
  plugins: [],
}

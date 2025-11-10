/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{components,.}/**/*.{js,ts,jsx,tsx}",
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
      }
    }
  },
  plugins: [],
}

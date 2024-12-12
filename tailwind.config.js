/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#27282B',
        'background-dark': '#1A1B1D',
        'background-light': '#EDEFEF',
        primary: '#D2492A',
        light: '#EDEFEF',
        accent: '#FA613D',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xl': ['1.5rem', '2rem'],
        '3xl': ['1.875rem', '2.25rem'],
        '4xl': ['2.25rem', '2.5rem'],
        '5xl': ['3rem', '1'],
        '6xl': ['3.75rem', '1'],
      },
      letterSpacing: {
        tight: '-0.015em',
        tighter: '-0.02em',
      },
    },
  },
  plugins: [],
};
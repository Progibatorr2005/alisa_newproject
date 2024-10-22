/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')


const colors = {
  transparent: twColors.transparent,
  black: '#131313',
  white: twColors.white,
  primary: '#A2CC84',
  secondary: '#FFFFFF',
  'bg-color': '#F8F8F8',
  aqua: '#268697'
}


module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Обновите путь к вашим файлам
    './pages/**/*.{js,ts,jsx,tsx}'
  ],

  theme: { 
    colors,
    extend: {
      keyframes: {
        animationOpacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': {
            opacity: 0.3,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    }
  },
  plugins: [],
};
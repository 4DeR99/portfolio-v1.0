/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      background: '#1A1A24',
      offBackground: '#08080B',
      primary: '#588FCA',
      secondary: '#1C647D',
      tertiary: '#4B3B6D',
      primaryText: '#FFFFFF',
      secondaryText: '#A3A3A7',
    },
    screens: {
      xsm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

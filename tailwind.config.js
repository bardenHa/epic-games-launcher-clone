// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#FFFFFF',
          150: '#F5F5F5',
          200: '#CACACA',
          300: '#A4A4A4',
          400: '#4D4D4D',
          500: '#353535',
          600: '#252525',
          700: '#121212',
          800: '#202020',
          900: '#000000',
        },
        accent: {
          500: '#0074e4',
        },
      },
      margin: {
        0.25: '0.0625rem',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        desaturatedRed: 'hsl(0, 36%, 70%)',
        softRed: 'hsl(0, 93%, 68%)',
        darkGrayishRed: 'hsl(0, 6%, 24%)',
        gradientOne: 'hsl(0, 0%, 100%)',
        gradientTwo: 'hsl(0, 100%, 98%)',
        gradientThree: 'hsl(0, 80%, 86%)',
        gradientFour: 'hsl(0, 74%, 74%)',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

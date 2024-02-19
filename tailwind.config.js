/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    fontFamily:{
      'secondary': ["Inter", ...defaultTheme.fontFamily.sans],
      'primary': ["Raleway", ...defaultTheme.fontFamily.sans],
      'roboto': ["Roboto", ...defaultTheme.fontFamily.sans],
    },

    

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1170px',
    },
    extend: {
      colors:{
        'primary' : '#1DD100',
        'secondary' : '#F73859',
        'heading' : '#030712',
        'text' : '#3E4549',
        'paragraph' : '#13131890',
        'light' : '#13131870',
        'blight' : '#13131810',
        
      }
    },
  },
  plugins: [],
}


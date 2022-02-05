// const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      backgroundImage:{
        'bg0': "url('../public/assets/bg_0.svg')"

      }
    },
  },
  plugins: [],
}

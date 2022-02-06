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
    // resolve: {
    //     fallback: {
    //         assert: require.resolve('assert'),
    //         crypto: require.resolve('crypto-browserify'),
    //         http: require.resolve('stream-http'),
    //         https: require.resolve('https-browserify'),
    //         os: require.resolve('os-browserify/browser'),
    //         stream: require.resolve('stream-browserify'),
    //     },
    //   },  
  plugins: [],
}

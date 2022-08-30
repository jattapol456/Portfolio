const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-1": "#303049",
        "blue-2": "#9999D3"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

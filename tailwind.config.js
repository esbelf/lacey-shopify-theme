/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './templates/customers/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  theme: {
    screens: {
      'md': '750px',
      'lg': '990px',
    },
    extend: {
      fontFamily: {
        'heading': 'var(--font-heading-family)'
      },
    },
    colors: {
      primary: "#1e4858", // #0B3C58
      secondary: "#bcdada",
      thirdary: '#2B677E',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
    }
  },
  plugins: [],
}

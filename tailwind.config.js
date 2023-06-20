/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        'custom__primary': '#F0F5E1',
        'custom__secondary': '#E6EBD0',
        'custom__third': '#FFF8DC',
        'custom__alert': '#D02424',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '4/5': '80%',
        '6/5': '120%',
      },
      minHeight: {
        '1/2': '50%',
      },
      height: {
        'slider': '480px',
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}

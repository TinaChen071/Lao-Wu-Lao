/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}","node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        'custom__primary': '#5F7B51',
        'custom__secondary': '#C6D292',
        'custom__third': '#F0F5E1',
        'custom__forth': '#D9ECB1',
        'custom__alert': '#D02424',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '4/5': '80%',
        '5/6': '83%',
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
      },
    },
    fontFamily: {
      num:['Water Brush']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('preline/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
  
}

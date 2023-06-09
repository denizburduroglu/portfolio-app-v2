/** @type {import('tailwindcss').Config} */
const { defaultTheme } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'height': {
        'screen-1/2': '50vh',
        'screen-1/3': '33.333333vh',
        'screen-2/3': '66.666667vh',
        'screen-1/4': '25vh',
        'screen-3/4': '75vh',
      },
      colors: {
        'light-shade': '#F7F3F4',
        // 'light-accent': '#BF735E',
        'main-brand-color': '#862125', //'#8B3B3E',
        'dark-accent': '#7B7DA5',
        'dark-shade': '#2C1F35',
        'success': '#5d8443',
        'warning': '#db740b',
        'danger': '#f44336',
        'black': '#000000',
        'white': '#FFFFFF',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              fontFamily: ['Lato', 'sans-serif'],
            },
            h2: {
              fontSize: '1.75rem',
              fontFamily: ['Lato', 'sans-serif'],
            },
            h3: {
              fontSize: '1.5rem',
              fontFamily: ['Lato', 'sans-serif'],
            },
            p: {
              fontSize: '1rem',
              fontFamily: ['Crimson Text', 'serif'],
            }
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}


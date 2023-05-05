/** @type {import('tailwindcss').Config} */
const { defaultTheme } = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
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
            },
            // strong: {
            //   color: theme('colors.gray.800'),
            // },
            // a: {
            //   color: theme('colors.green.500'),
            //   '&:hover': {
            //     color: theme('colors.green.600')
            //   },
            // },
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}


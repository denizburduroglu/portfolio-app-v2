/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        sans: ['Gothic', 'sans-serif'],
        serif: ['PT Serif', 'serif'],
      }
    },
  },
  plugins: []
}


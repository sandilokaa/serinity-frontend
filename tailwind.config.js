/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/assets/style/*.{css}",
  ],
  safelist: [
    { pattern: /max-h-\d+/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      screens: {
        'xl': '1440px'
      }
    },
  },
  plugins: [],
}


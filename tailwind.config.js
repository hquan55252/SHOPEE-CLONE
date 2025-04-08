/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // để Tailwind scan được toàn bộ src
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#f97316',
          light: '#fbbf24',
          dark: '#c2410c'
        }
      }
    }
  },
  plugins: []
}

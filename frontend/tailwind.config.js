/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-text': '#382C2C',
        'purple': '#937DC2'
      }
    },
  },
  plugins: [],
}
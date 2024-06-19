/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#347355",
        secondary: "#346773",
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        cursive: ['Courgette', 'cursive']
      },
    },
  },
  plugins: [],
}


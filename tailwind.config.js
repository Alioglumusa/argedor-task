/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#192D3F",
        "light-white": "rgba(255,255,255,0.17)",
        "dark": "#000"
      }
    },
  },
  plugins: [],
}
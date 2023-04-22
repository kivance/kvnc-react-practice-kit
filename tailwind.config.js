/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgimg: "url('./images/bgimg.jpg')"
      }
    },
  },
  plugins: [],
}
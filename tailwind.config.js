/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    center: true,
    padding: '16px',
    extend: {},
  },
  screen: {
    '2xl' : '1320px'
  }
  plugins: [require("daisyui")],
}

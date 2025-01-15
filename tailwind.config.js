/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // Ensure it includes .jsx files
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Correctly reference Poppins
        fairplay: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
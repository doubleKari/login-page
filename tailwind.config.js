/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        nanum:["Nanum Gothic", "sans-serif"]
      },
    },
  },
  plugins: [],
};

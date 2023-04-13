/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Babes: ["Bebas Neue", "cursive"],
        Ubuntu: ["Ubuntu", " sans-serif"],
        Open: ["Open Sans", " sans-serif"],
        Josefin: ["Josefin Sans", " sans-serif"],
        Dancing: ["Dancing Script", " sans-serif"],
        Great: ["Great Vibes", " sans-serif"],
        Libre: ["Libre Franklin", " sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

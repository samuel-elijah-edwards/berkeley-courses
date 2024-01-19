/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customScale: {
          // Corrected keyframes syntax
          "0%, 100%": { transform: "scale(1.04)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        customScale: "customScale 3s ease-in-out infinite", // Corrected animation syntax
      },
      colors: {
        berkeleyBlue: "#003262",
        metallicGold: "#bc9b6a",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: {
          light: "#6ee7b7",
          DEFAULT: "#10b981",
          dark: "#047857",
        },

        lightblue: "#F0F8FF", // Adding the aliceblue color

        customGray: {
          light: "#f3f4f6",
          DEFAULT: "#9ca3af",
          dark: "#4b5563",
        },
      },
    },
  },
  plugins: [],
};

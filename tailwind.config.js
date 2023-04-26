/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        accent: "#feac1d",
        "light-bg": "#EDF1F5",
        "light-text": "#F6F6F6",
        "dark-bg": "#212121",
        "dark-text": "#333333",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

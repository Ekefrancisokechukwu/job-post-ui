/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "primary-color": "#DC4A2D",
      },
      boxShadow: {
        "custom-inset": "inset 0px 4px 4px 0px #00000014",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dimgrey-main": "#696969",
        "grey-main": "#7a7a7a",
        "light-gray-main": "#7e7e7e",
        "background-main": "#1a1a1a",
      },
      spacing: {
        "20vh": "20vh",
        "100vw": "100vw",
        "inherit-": "inherit",
      },
      translate: {
        "1/2": "50%",
        "-1/2": "-50%",
      },
      backgroundImage: {
        "gradient-divider":
          "linear-gradient(to right, rgba(0, 0, 0, 0.02), #7e7e7e, rgba(0, 0, 0, 0.005))",
        "gradient-introSection":
          "linear-gradient(to right, rgba(105, 105, 105,0.4),  rgba(0, 0, 0, 0.7))",
        "gradient-button":
          "linear-gradient(to right, rgba(253, 132, 31, 0.8),  rgba(205, 16, 77, .8))",
        "gradient-button-hover":
          "linear-gradient(to right, rgba(253, 132, 31, 0.8),  rgba(253, 132, 31, 0.8))",
      },
    },
  },
  plugins: [],
};

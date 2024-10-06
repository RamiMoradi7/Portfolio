
const { default: theme, content } = require("@material-tailwind/react/theme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-txt": "rgba(184, 187, 191, 1)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      width: {
        78: "19rem",
        22: "4.8rem",
      },
      rotate: {
        80: "80deg",
      },
      height: {
        13: "3.25rem",
      },
      screens: {
        xs: "540px",
        xxs: "300px",
      },
    },
  },
  plugins: [],
};

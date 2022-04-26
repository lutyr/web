const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fenwick: ["Fenwick", "cursive"],
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom, var(--tw-gradient-stops)), url('/images/roudarit.jpeg')",
      },
    },
  },
  plugins: [iOSHeight],
};

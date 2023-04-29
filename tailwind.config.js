const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fenwick: ["Fenwick", "cursive"],
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0, 1) 90%), url('/images/spere.jpeg')",
      },
    },
  },
  plugins: [iOSHeight],
};

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        heading: "2rem",
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      height: {
        80: "20rem",
        96: "24rem",
      },
      backgroundColor: {
        coffee: "#8D5903",
      },
    },
  },
  variants: {
    display: ["responsive", "hover", "focus"],
  },
  plugins: [],
};

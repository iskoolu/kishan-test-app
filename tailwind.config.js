/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./styled-component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      lightblack: "#0E0E0E",
      textwhite: "#fff",
      footerBannerStart: "#FFCC97",
      footerBannerEnd: "#D5D9C5",
    },
    extend: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(50%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },

        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      width: {
        200: "200%",
      },
    },
  },
  plugins: [

  ],
}


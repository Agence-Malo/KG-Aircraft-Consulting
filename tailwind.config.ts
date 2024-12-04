import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: "0.69rem",
      sm: "0.88rem",
      base: "0.94rem",
      lg: "1.38rem",
      xl: "1.81rem",
      "2xl": "2.44rem",
    },
    extend: {
      colors: {
        axolotl: "#6C8254",
        coffee: "#8E6658",
        vitsippa: {
          50: "#F5F4F0",
          100: "#ECECE8",
          200: "#CFCFCD",
          300: "#D6D0C3",
          400: "#C3B6A4",
          500: "#877E75",
          600: "#3E3A38",
        },
      },
      animation: {
        "loading-svg": "loading-svg 1s ease-in-out backwards 2s",
        "loading-svg-md": "loading-svg-md 1s ease-in-out backwards 2s",
        "loading-logo": "loading-logo 1s ease-in-out backwards",
        "loading-title": "loading-logo 1s ease-in-out 0.5s backwards",
        "loading-bar": "loading-bar 1.5s ease-in-out backwards",
      },
      keyframes: {
        "loading-svg": {
          "0%": { width: "32vh", transform: "translateY(425%)" },
          "100%": { width: "16vh", transform: "translateY(3vh)" },
        },
        "loading-svg-md": {
          "0%": { width: "48vh", transform: "translateY(250%)" },
          "100%": { width: "16vh", transform: "translateY(3vh)" },
        },
        "loading-logo": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        "loading-bar": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

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
      xs: "0.5rem",
      sm: "0.625rem",
      base: "0.6875rem",
      lg: "1rem",
      xl: "1.3125rem",
      "2xl": "1.75rem",
    },
    extend: {
      backgroundImage: {
        management: "url('/graphics/images/services/management.webp')",
        charter: "url('/graphics/images/services/charter.webp')",
        consulting: "url('/graphics/images/services/consulting.webp')",
        "about-hero": "url('/graphics/images/about/hero.webp')",
        malta: "url('/graphics/images/about/malta.webp')",
        "falcon-temp": "url('/graphics/images/services/management.webp')",
        pattern: "url('/graphics/images/pattern.svg')",
      },
      colors: {
        axolotl: "#6C8254",
        vitsippa: {
          50: "#F5F4F0",
          100: "#CFCFCD",
          200: "#D6D0C3",
          300: "#C3B6A4",
          400: "#877E75",
          500: "#3E3A38",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

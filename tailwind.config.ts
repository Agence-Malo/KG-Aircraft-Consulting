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
        accent: "#6C8254",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: "#6C8254",
            default: {
              DEFAULT: "#6C8254",
              100: "#6C825480",
              200: "#6C8254",
              300: "#6C8254",
              400: "#6C8254",
              500: "#6C8254",
              600: "#6C8254",
              700: "#6C8254",
              800: "#6C8254",
              900: "#6C8254",
            },
            focus: {
              DEFAULT: "#6C8254",
              100: "#6C8254",
              200: "#6C8254",
              300: "#6C8254",
              400: "#6C8254",
              500: "#6C8254",
              600: "#6C8254",
              700: "#6C8254",
              800: "#6C8254",
              900: "#6C8254",
            },
            background: {
              DEFAULT: "#6C8254",
              100: "#6C8254",
              200: "#6C8254",
              300: "#6C8254",
              400: "#6C8254",
              500: "#6C8254",
              600: "#6C8254",
              700: "#6C8254",
              800: "#6C8254",
              900: "#6C8254",
            },
            foreground: {
              DEFAULT: "#000000",
              100: "#6C825480",
              200: "#6C8254",
              300: "#6C8254",
              400: "#6C8254",
              500: "#6C8254",
              600: "#6C8254",
              700: "#6C8254",
              800: "#6C8254",
              900: "#6C8254",
            },
          },
        },
      },
    }),
  ],
};
export default config;

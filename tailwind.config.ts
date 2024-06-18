import { url } from "inspector";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('/about-img.jpg')",
        "heros-bg": "url('/heros-bg.png')",
        "heros-bg-mobile": "url('/heros-bg-mobile.png')",
        "heros-bg-tablet": "url('/heros-bg-tablet.png')",
        "heros-gate": "url('/gate.png')",
        partners: "url('/partners-bg.png')",
        "articles-banner": "url('/articles-banner.svg')",
        "advocate-backdrop": "url('/advocate-backdrop.png')",
      },
      colors: {
        highlight: "#EBEABA",
        green: "#01fb8a",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp"), nextui()],
};
export default config;

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
        "heros-bg": "url('/backdrop-hero.gif')",
        "heros-gate": "url('/gate.png')",
        partner: "url('/partner-bg.png')",
        "articles-banner": "url('/articles-banner.svg')",
        "advocate-backdrop": "url('/advocate-backdrop.png')",
        "team-1": "url('/team_bg_1.png')",
        "team-2": "url('/team_bg_2.png')",
        ad_hero_bg: "url('/advocate_hero_bg.png')",
        ad_hero_bg_2: "url('/advocate_hero_bg_2.png')",
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

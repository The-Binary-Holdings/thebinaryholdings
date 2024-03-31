import { url } from "inspector";
import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

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
        "about": "linear-gradient(180deg, #000000 0%, #03102A 29.91%, #4327B5 59.71%, #8E70DC 75.73%, #9E7DF5 84.47%, #A385F5 89.91%, #C0ABF8 100%);",
        "heros-bg": "url('/heros-bg.png')",
        "heros-gate": "url('/gate.svg')",
      },
      colors: {
        'highlight': '#EBEABA',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      bg: "#0A0C11",
      white: "#FAFAFA",
      bluegray: "#ABB8C3",
      blue: "#00488e",
      lightblue: "#049cfd",
      darkblue: "#03065B",
      darkgray: "#2a353d",
      accent: "#f7931b",
      secondary: "#cccccc",
      primary: "#222222",
      green: "#38a3a5",
      neonblue: "#1F51FF",
    },
  },

  plugins: [],
};
export default config;

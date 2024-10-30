import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        text: "#190905",
        background: "#ffffff",
        primary: "#00dcf0",
        secondary: "#81e496",
        accent: "#63ded6",
      },
    },
  },
  plugins: [],
};
export default config;

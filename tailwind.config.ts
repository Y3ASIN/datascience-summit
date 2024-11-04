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
        text: "#030c19",
        background: "#ffffff",
        primary: "#2b75e8",
        secondary: "#f0cf77",
        accent: "#8ded5e",
      },
    },
  },
  plugins: [],
};
export default config;

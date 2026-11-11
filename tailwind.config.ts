import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#dcf3ff",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          900: "#083344",
        },
      },
    },
  },
  plugins: [],
};
export default config;

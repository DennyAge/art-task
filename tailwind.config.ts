import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        default: {
          100: "#F5F5F5",
          200: "#E9E9E9",
          350: "#CCCCCC",
          600: "#525252",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

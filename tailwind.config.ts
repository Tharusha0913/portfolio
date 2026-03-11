import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0a0a0a",
          secondary: "#1a1a1a",
        },
        brand: {
          brown: {
            light: "#8b5e3c",
            DEFAULT: "#5d4037",
            dark: "#3e2723",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-cinematic": "linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.8) 100%)",
        "gradient-warm": "radial-gradient(circle at center, rgba(93, 64, 55, 0.15) 0%, rgba(10, 10, 10, 0) 70%)",
      },
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "parallax": "parallax var(--parallax-duration, 1s) linear forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

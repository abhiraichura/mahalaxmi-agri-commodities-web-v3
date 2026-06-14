import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#DE2A72",
          "primary-light": "#F472A0",
          "primary-dark": "#B81E5C",
          glow: "rgba(222, 42, 114, 0.15)",
        },
        cream: {
          DEFAULT: "#FFFBF7",
          deep: "#FFF5EB",
        },
        peach: "#FDE8D0",
        dark: {
          DEFAULT: "#1A1A1A",
          warm: "#2D2420",
          card: "#252525",
          border: "#333333",
        },
        accent: {
          gold: "#D4A843",
          green: "#2D5A3D",
          earth: "#8B6914",
          saffron: "#FF9933",
        },
      },
      fontFamily: {
        primary: ["Barlow", "sans-serif"],
        display: ["Playfair Display", "serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      fontSize: {
        hero: "clamp(3rem, 10vw, 8rem)",
        h1: "clamp(2.5rem, 6vw, 5rem)",
        h2: "clamp(2rem, 4vw, 3.5rem)",
        h3: "clamp(1.5rem, 3vw, 2.5rem)",
        h4: "clamp(1.25rem, 2vw, 1.75rem)",
        body: "clamp(1rem, 1.2vw, 1.125rem)",
      },
      spacing: {
        section: "clamp(5rem, 10vw, 10rem)",
        "section-x": "clamp(1.5rem, 5vw, 4rem)",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.04)",
        medium: "0 8px 40px rgba(0,0,0,0.08)",
        heavy: "0 20px 60px rgba(0,0,0,0.12)",
        brand: "0 8px 32px rgba(222, 42, 114, 0.2)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        elastic: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
        power3: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "bounce-slow": "bounce-slow 1.5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

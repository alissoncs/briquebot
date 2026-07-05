import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand primary — violet
        brand: {
          DEFAULT: "#7C3AED",
          fg: "#ffffff",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          600: "#7C3AED",
          700: "#6d28d9",
          800: "#5b21b6",
        },
        // Accent — amber
        accent: {
          DEFAULT: "#F59E0B",
          fg: "#1f1300",
          soft: "#fef3c7",
        },
        // Reserved semantic colors
        whatsapp: "#25D366",
        pix: "#32BCAD",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      green: "#00A79D",
      yellow: "#FFF200",
      orange: "#EE6928",
      blue: "#5285C2",
      gray: "#5f6368",
      emerald: colors.emerald,
      red: colors.red,
      slate: colors.slate,
      white: colors.white,
      violet: colors.violet,
      black: "#3c4043",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-signika)"],
        body: ["var(--font-work-sans)"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;

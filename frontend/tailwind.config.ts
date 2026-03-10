import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        space: ["var(--font-space)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        base: "#070b14",
        panel: "#101a2f",
        panelSoft: "#14213b",
        line: "rgba(255, 255, 255, 0.12)",
        brand: "#22d3ee",
        mint: "#5eead4"
      },
      boxShadow: {
        glow: "0 16px 42px rgba(34, 211, 238, 0.25)"
      },
      backgroundImage: {
        orbital:
          "radial-gradient(circle at 10% 8%, rgba(34,211,238,0.2), transparent 40%), radial-gradient(circle at 80% 14%, rgba(94,234,212,0.15), transparent 36%)"
      }
    }
  },
  plugins: []
};

export default config;

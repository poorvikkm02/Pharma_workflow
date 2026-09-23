import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--card)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        teal: "var(--teal)",
        indigo: "var(--indigo)",
        line: "var(--line)",
        "line-soft": "var(--line-soft)",
        "teal-tint": "var(--teal-tint)",
        "indigo-tint": "var(--indigo-tint)",
        amber: "var(--amber)",
        "amber-tint": "var(--amber-tint)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
      maxWidth: {
        wrap: "1120px",
      },
      keyframes: {
        nodeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        nodeIn: "nodeIn 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;

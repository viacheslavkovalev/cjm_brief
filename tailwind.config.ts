import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0D1F3C",
        figmaBg: "#0A2341",
        page: "#F5F5F5",
        ink: "#051D34",
        blueCta: "#0525C6",
        accent: "#FC5741",
        card: "#162440",
        cardBorder: "#1E3050",
        inputBg: "#0F1C35",
        textPrimary: "#FFFFFF",
        textSecondary: "#A8B4C8",
      },
      fontFamily: {
        travelsNext: ['"TT Travels Next Trl"', "Inter", "Arial", "sans-serif"],
        travels: ['"TT Travels Trl"', "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
} satisfies Config;

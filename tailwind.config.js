/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#00d4ff",
          purple: "#a855f7",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
        dark: {
          900: "#030712",
          800: "#0a0f1e",
          700: "#0d1630",
          600: "#111827",
          500: "#1f2937",
        },
      },
      fontFamily: {
        mono: ["Fira Code", "Cascadia Code", "JetBrains Mono", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00d4ff, 0 0 10px #00d4ff" },
          "100%": { boxShadow: "0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff" },
        },
      },
      boxShadow: {
        neon: "0 0 20px rgba(0, 212, 255, 0.3)",
        "neon-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
        "neon-strong": "0 0 40px rgba(0, 212, 255, 0.5)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

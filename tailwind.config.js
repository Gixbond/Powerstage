/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00ffff",
          magenta: "#ff00ff",
          yellow: "#ffff00",
          pink: "#ff69b4",
        },
        dark: {
          bg: "#0B0B0D",
          surface: "#1a1a1a",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "pulse-neon": "pulse-neon 1.5s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { textShadow: "0 0 20px rgba(255, 255, 255, 0.3)" },
          "100%": { textShadow: "0 0 40px rgba(255, 255, 255, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        }
      }
    },
  },
  plugins: [],
}

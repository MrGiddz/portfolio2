import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "ping-1": "pinger 1.9s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-2": "pinger 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-3": "pinger 1.9s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-4": "pinger 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        pinger: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;

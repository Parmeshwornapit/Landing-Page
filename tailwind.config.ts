import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: { colors: { ink: "#14031D", blue: { DEFAULT: "#7C2AE8", 50: "#F5EFFF", 100: "#E9D9FF", 200: "#D4B7FF", 300: "#BB8AFF", 500: "#9146FF", 600: "#7C2AE8", 700: "#641CCB" }, mist: "#21092E", plum: "#2B0D3D", lilac: "#D8BEFF" }, boxShadow: { soft: "0 22px 60px rgba(54, 15, 92, .35)" } } },
  plugins: [],
} satisfies Config;

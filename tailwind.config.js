/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // indigo
        accent: "#22c55e", // green
        softBg: "#f8fafc",
        darkBg: "#0f172a",
        darkCard: "#1e293b",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

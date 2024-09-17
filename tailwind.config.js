/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#9d7f74",
      },
      fontFamily: {
        greatvibes: ["Great Vibes", "sans-serif"],
        holyfriday: ["Holy Friday", "sans-serif"],
        challista: ["Challista Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};

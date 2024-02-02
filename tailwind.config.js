/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        source: ["Source Sans 3", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      screens: {
        "min-xl": { raw: "(min-width: 1400px) and (max-width: 1536px)" },
      },
    },
  },
  plugins: [],
};

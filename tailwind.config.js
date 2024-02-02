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
        mobile: { raw: "(max-width: 426px)" },
        mobilesm: { raw: "(max-width: 376px)" },
        mobilexs: { raw: "(max-width: 321px)" },
      },
    },
  },
  plugins: [],
};

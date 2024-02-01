/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: { raw: "((min-height:1440px) and(max-height:1536px))" },
      },
    },
  },

  plugins: [],
};

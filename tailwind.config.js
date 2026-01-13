/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkmode: "#000510",
        primary: "#99E39E",
        muted: "#d8dbdb",
      },
    },
  },
  plugins: [],
};

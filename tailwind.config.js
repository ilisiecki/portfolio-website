/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          primary: "#000000",
          secondary: "#000000",
          background: "#262626",
          icon: "#262626",
          iconDark: "white",
          iconHover: "#737373",
          iconHoverDark: "#a3a3a3",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Calibre", ...defaultTheme.fontFamily.sans],
        mono: ["SF Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "#e3f6f5",
        darkerBg: "#bae8e8",
        darkBlue: "#272343",
        button: "#ffd803",
        darkModeBg: "#16161a",
        lightPurple: "#7f5af0",
        lightGray: "#94a1b2",
        primary: "#DFF2D8",
        tertiary: "#7EBDC3",
      },
    },
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  darkMode: "media",
  content: [
    './**/*.html',
    './**/*.js',],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss")],
};

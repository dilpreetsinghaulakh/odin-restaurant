module.exports = {
  mode: "jit",
  darkMode: "media",
  content: [
    './**/*.html',
    './**/*.js',],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Philosopher', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss")],
};

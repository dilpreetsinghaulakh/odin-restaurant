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
    extend: {
      dropShadow: {
        'xl-dark': '0 35px 35px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss")],
};

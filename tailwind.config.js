module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 0.5s infinite',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

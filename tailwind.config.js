/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./custom-pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#ff922c',
        'primary-light': '#ffeede',
        'secondary': '#54bf29',
        'secondary-light': '#eaffe2',
        'text-primary': '#333333',
      }
    },
  },
  plugins: [],
}


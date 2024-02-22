/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary': '#BAA333'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    },
  },
  plugins: [],
}


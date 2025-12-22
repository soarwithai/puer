/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['serif'],
        sans: ['sans-serif'],
      },
      colors: {
        tea: {
          50: '#f9f8f6',
          100: '#efece6',
          200: '#e0dacf',
          300: '#c8bea6',
          400: '#ac9c7d',
          500: '#93815e',
          600: '#766448',
          700: '#5f4f3a',
          800: '#4e4233',
          900: '#42382e',
        },
        paper: '#fdfbf7',
        ink: '#2c2c2c'
      }
    }
  },
  plugins: [],
}

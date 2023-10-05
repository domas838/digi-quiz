/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        black: '#000',
        white: '#FFF',
        blue: '#4A74EB',
        gray: '#6B6B6B'
      },
    }
  },
  plugins: [],
}


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
        yellow: '#F4E140',
        gray: {
          100: '#f4f5f7',
          200: '#EEEFF4',
          300: '#D9DBE1',
          700: '#B8B8B8',
          800: '#6B6B6B',
          900: '#2D2E39'
        }
      },
    }
  },
  plugins: [],
}


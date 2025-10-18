/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Bohemian earth tones and natural colors
        cork: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d9c5a3',
          400: '#c9ad7f',
          500: '#b8945b',
          600: '#9a7646',
          700: '#7a5a35',
          800: '#5c4327',
          900: '#3e2d1b',
        },
        sand: {
          50: '#faf9f7',
          100: '#f4f1ec',
          200: '#e8e0d5',
          300: '#dccfbe',
          400: '#c9b89d',
          500: '#b5a17c',
          600: '#9a8562',
          700: '#7d6a4e',
          800: '#5f503a',
          900: '#423728',
        },
        sage: {
          50: '#f5f7f4',
          100: '#e8ede5',
          200: '#d1dbc9',
          300: '#b5c5a8',
          400: '#98ae87',
          500: '#7c9766',
          600: '#647d52',
          700: '#4d6340',
          800: '#384a2f',
          900: '#25331f',
        },
        terracotta: {
          50: '#fdf6f3',
          100: '#f9e8df',
          200: '#f2d0bf',
          300: '#e8b49a',
          400: '#dd9474',
          500: '#d17450',
          600: '#b85f3e',
          700: '#95492f',
          800: '#713623',
          900: '#4e2518',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

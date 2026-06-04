/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8fa',
          100: '#e5edf2',
          200: '#c5dbe8',
          300: '#94bfd8',
          400: '#5e9bc3',
          500: '#4682b4', // Dotted map matching color (Steel Blue)
          600: '#356a94',
          700: '#2d5779',
          800: '#284b68',
          900: '#254057',
          950: '#152737',
        },
        accent: {
          50: '#ecfdf5',
          500: '#10b981', // Emerald
          600: '#059669',
        },
        neutral: {
          950: '#030712',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

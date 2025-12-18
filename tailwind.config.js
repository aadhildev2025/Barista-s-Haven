/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f5f4',   // Warm Grey (Text)
          100: '#e7e5e4',
          200: '#d6d3d1',
          300: '#a8a29e',
          400: '#78716c',
          500: '#d4a373', // Gold/Amber Accent
          600: '#b08968',
          700: '#44403c', // Dark Charcoal
          800: '#292524', // Darker Charcoal
          900: '#1c1917', // Nearly Black (Background)
          950: '#0c0a09', // Deepest Black
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Great Vibes', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

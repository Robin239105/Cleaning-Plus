/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e1a',
        surface: '#111827',
        surfaceLight: '#0f1623',
        primary: '#00c2ff',
        secondary: '#0ea5e9',
        textPrimary: '#ffffff',
        textSecondary: '#94a3b8',
        borderSubtle: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['Inter', 'Barlow', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

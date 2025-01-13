/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "serif"],
      },
      colors: {
        bgDark: '#101010',
        bgLight: '#FAFAFA',
        prodAccent: '#F1F1F1',
        primAccent: '#D87D4A',
        lightAccent: '#FBAF85',
        fontLight: '#FFFFFF',
        fontDark: '#000000',
      }
    },
  },
  plugins: [],
}
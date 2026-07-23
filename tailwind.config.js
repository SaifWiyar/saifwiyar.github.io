/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        pashto: ['Noto Sans Arabic', 'Noto Naskh Arabic', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

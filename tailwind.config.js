/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D9D9D9',
        dark: '#1e1e1e',
        warning: '#FFA92E',
        danger: '#F63232',
        shade: 'rgba(0, 0, 0, 0.50)',
        greyCst: '#F6F6F6'
      }
    },
  },
  plugins: [],
}


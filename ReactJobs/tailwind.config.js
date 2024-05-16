/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontsFamily: {
        sans:['Roboto', 'sans-sarif']
      },
      gridTamplateColumns: {
        '70/30':'70% 28%',
      }
    },
  },
  plugins: [],
};

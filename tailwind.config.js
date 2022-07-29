/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FF0063 => primary red
        'primary': '#FF0063',
        'secondary': '#FFFFFF',
        'red': "#FC5185",
        'blue': "#4D77FF",
        'gray': '#8492a6',
      }
    },
  },
  plugins: [],
}

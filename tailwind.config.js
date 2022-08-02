/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // FF0063 => primary red
        // FC5185
        //3AB4F2 => blue
        'primary': '#e0e0eb',
        'secondary': '#3AB4F2',
        'red': "#ABC9FF",
        'blue': "#4D77FF",
        'gray': '#8492a6',
      }
    },
  },
  plugins: [],
}

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
        'primary': "#4D77FF",
        'blue': '#1363DF',
        'secondary': '#00D7FF',
        'red': "#ABC9FF",
        'gray': '#8492a6',
      }
    },
  },
  plugins: [],
}

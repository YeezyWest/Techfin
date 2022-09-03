/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    extend: {
      fontFamily:{
        Space: ['Space Grotesk']
      }
    },
  },
  plugins: [],
}
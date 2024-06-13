/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-font': 'Comic Sans MS',
      },
      screens: {
        '2sm': '520px',
        '1sm': '446px',
        'sm': '640px',  // Small screens, like mobile
        'md': '768px',  // Medium screens, like tablets
        'lg': '1024px', // Large screens, like laptops
        'xl': '1080px', // Extra-large screens, like desktops
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

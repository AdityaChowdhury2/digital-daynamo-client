/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: '1220px',

        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "garden"],
  },

}
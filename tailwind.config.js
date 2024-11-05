/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-clr": "#673AB7",
        "dark-primary-clr": "#562D9C",
        "grayish-clr": "rgb(109, 109, 109)"
      }
    },
    
  },
  plugins: [],
}


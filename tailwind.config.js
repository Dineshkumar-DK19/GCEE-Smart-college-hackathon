/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind: "Activate dark mode classes when [data-theme='dark'] is present"
  darkMode: ['selector', '[data-theme="dark"]'], 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
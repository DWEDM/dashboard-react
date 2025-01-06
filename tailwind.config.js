/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the HTML files
    "./src/**/*.{js,jsx,ts,tsx}" // Make sure to cover all relevant file extensions
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI plugin
};
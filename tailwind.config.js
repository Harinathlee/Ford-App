/** @type {import('tailwindcss').Config} */

import tailwindcss from "tailwindcss";
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust the paths to match your project structure
  ],  theme: {
    extend: {},
  },
  plugins: [tailwindcss],
};

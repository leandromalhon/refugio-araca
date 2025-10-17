/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "araca-green": "#4A5D3F",
        "araca-brown": "#3D2817",
        "araca-terracota": "#B8764F",
        "araca-beige": "#E8DCC4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

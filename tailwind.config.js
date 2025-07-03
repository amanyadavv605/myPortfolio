/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffeedd", // warm base
        primary: "#fcba03",     // accent
        secondary: "#ee7752",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(to bottom right, #fceabb, #f8b500)',
      },
    },
  },
  plugins: [],
}

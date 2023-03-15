/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Outfit", "ui-sans-serif", "system-ui"],
    },

    extend: {
      colors: {
        "light-grey": "hsl(212, 45%, 89%)",
        "greyish-blue": "hsl(220, 15%, 55%)",
        "dark-blue": "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};

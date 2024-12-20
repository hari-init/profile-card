/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        bgCustom: "#f5f5f5",
      },
    },
  },
  plugins: [],
};

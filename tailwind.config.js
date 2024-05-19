/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      Dark: {
        Elements: " hsl(209, 23%, 22%)",
        Background: " hsl(207, 26%, 17%)",
        Text: "hsl(200, 15%, 8%)",
      },
      Light: {
        Input: " hsl(0, 0%, 52%)",
        Elements: "hsl(0, 0%, 100%)",
        Background: " hsl(0, 0%, 98%)",
        Text: " hsl(0, 0%, 100%)",
      },
    },
    extend: {},
  },
  plugins: [],
};

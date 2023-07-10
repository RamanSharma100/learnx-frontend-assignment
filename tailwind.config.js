/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7974F5",
        secondary: "#2F2B53",
        danger: "#CD0300",
        text: "#50514C",
      },
    },
  },
  plugins: [],
};

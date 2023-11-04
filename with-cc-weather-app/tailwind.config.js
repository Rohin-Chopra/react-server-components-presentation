import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ebebeb",
        night: "rgba(50,49,78,0.8)",
        nightText: "#9ea1c8",
      },
    },
  },
  plugins: [tailwindScrollbar, { nocompatible: true }],
};

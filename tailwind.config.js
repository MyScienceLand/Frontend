/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5E196C",
        secondary: "#1A202F",
        white: "#FFFFFF",
        gray: "#232B3E",
        aqua: "#24B7E5",
        navygray: "#BECFFA",
      },
      backgroundImage: {
        mygradient1:
          "linear-gradient(to bottom, rgba(5, 5, 5, 0.85) 0%, rgba(30, 30, 30, 0.55) 64%)",
      },
    },
  },
  plugins: [],
};

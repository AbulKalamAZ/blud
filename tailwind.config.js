/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "30px",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1200px",
      },
    },
    extend: {
      colors: {
        mainPink: "#ff357d",
        skyBlue: "#000",
        green: "#698b51",
        red: "#d00027",
      },
      lineHeight: {
        tighest: "0.8",
      },
      screens: {
        xl: "1600px",
      },
      backgroundImage: {
        texture: "url('/texture.jpg')",
        dottedTexture1: "url('/dottedTexture1.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        wave: "wave 3s ease-in-out infinite",
        "wave-reverse": "wave-reverse 5s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        "wave-reverse": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-2deg)" },
        },
      },
      fontFamily: {
        cramps: ["Cramps", "sans-serif"],
      },
    },
  },
  safelist: ["bold", "italic", "!text-black"],
  plugins: [require("@tailwindcss/typography")],
};

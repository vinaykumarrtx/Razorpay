/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/components/**/*.{js,jsx}",
    "./public/index.html",
  ],
  content: ["*"],
  theme: {
    extend: {boxShadow: {
      '3xl': '35px 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors: {
      deepBlue: "#02042a",
      lightBlue: "#2b84ea",
      lightBlue300: "#4b94ed",
      lightBlue500: "#0b72e7",
      greenLight: "#61cea6",
      grayText: "#818597",
      lightGray: "#e2e2e2",
      grayBlue: "#344a6c",
      deepBlueHead: "#162f56",
      gray2: "#525a76",
    },},
    
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "quicksand": ["QuickSand-Regular"],  // ADD THIS LINE
        "quicksand-bold": ["QuickSand-Bold"],
        "quicksand-medium": ["QuickSand-Medium"],
        "quicksand-regular": ["QuickSand-Regular"],
        "quicksand-semibold": ["QuickSand-SemiBold"],
        "quicksand-light": ["QuickSand-Light"],
      },
      colors: {
        primary: "#FF6347", // Add your actual primary color
        "dark-100": "#1F1F1F", // Add your actual dark color
      },
    },
  },
  plugins: [],
};
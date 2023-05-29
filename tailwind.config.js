/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./**/*.{html,njk,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: [
        "Pretendard",
        "Noto Sans",
        "Noto Sans JP",
        "Noto Sans KR",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

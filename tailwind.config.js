/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.{html,css,js,vue}","./public/clases-unity/*.{html,css,js,vue}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#ffff',
      },
    },
  },
  plugins: [],
}


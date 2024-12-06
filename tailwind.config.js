/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        'mainbg': 'hsl(233, 47%, 7%)',
        'cardbg': 'hsl(244, 38%, 16%)',
        'accent': 'hsl(277, 64%, 61%)',
        'headstats': 'hsl(0, 0%, 100%)',
        'paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'statcolor': 'hsla(0, 0%, 100%, 0.6)',
      },
      backgroundImage: {
        'imgdesktop': "./src/images/image-header-desktop.jpg",
        'imgmobile': "./src/images/image-header-mobile.jpg",
      },
      fontFamily: {
        'inter': [
          '"Inter", serif'
          ],
        'lexend': [
          '"Lexend Deca", sans-serif'
        ],
      },
    },
  },
  plugins: [],
}


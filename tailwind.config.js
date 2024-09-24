/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/index.html',
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': 'rgba(172,149,229,1)',
        'custom-light-blue': 'rgba(163,201,222,1)',
        'custom-blue': 'rgba(167,194,223,1)',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.html'
  ],
  theme: {
    extend: {
      colors:{
        'light-blue': 'hsl(240, 75%, 98%)',
        'dark-blue': 'hsl(243, 87%, 12%)',
        'bright-blue': 'hsl(224, 93%, 58%)',
        'cyan-moderated': 'hsl(170, 45%, 43%)',
        'blue-desatured': 'hsl(238, 22%, 44%)',
        'light-gray': 'hsl(0, 0%, 75%)'
      },
    },
  },
  plugins: [],
}


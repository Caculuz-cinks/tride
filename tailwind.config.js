/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      semibold: ["semibold", "sans-serif"],
      regular: ["regular", "sans-serif"],
      medium: ["medium", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '5rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      // dropShadow: {
      //  feature:' 4px 4px 8px 0px #62626240'
      // },
      colors:{
        yellow: "#e1800e",
        black:'#0c0c0c',
        neutral: '#dedae5'
      },
      // backgroundImage:{
      //   hero:'url("/src/assets/hero.jpg")',
      //   jobs:'url("/src/assets/jobs.png")'
      // }
    },
  },
  plugins: [],
}

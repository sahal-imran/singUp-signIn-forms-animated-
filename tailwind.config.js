module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        gradBtnFrom: "#692aab",
        gradBtnTo:"#bf2c72",
        greenish:'#2fcd88',
        connectBtnFrom:'#5edfae',
        connectBtnTo:'#7b35e2',
        connectBtnVia:'#406ccf'
      },
      fontFamily:{
        primary:['Montserrat', 'sans-serif'],
        secondary:['Righteous', 'cursive']
      }
    },
  },
  plugins: [],
}

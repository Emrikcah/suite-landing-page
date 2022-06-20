module.exports = {
  content: ['./*.html'],
  theme: {
   
    screens:{
      sm: '375px',
      md: '768px',
      lg: '1440px'
    },
   
    extend: {
      colors:{
        darkBlue: 'hsl(219,43%,16%)',
        gray: 'hsl(218,20%,36%)',
        offWhite: 'hsl(30,33%,93%)',
        white: 'hsl(30,29%,97%)',
        purple: 'hsl(264,100%,45%)',
        pink: 'hsl(292,76%,30%)',
        orange: 'hsl(31,100%,65%)',
      },
    },
  },
  plugins: [],
}
// screens sets container class
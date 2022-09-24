/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'main-red':'#f22e44'  
      },
      gridTemplateColumns:{
        
        
        '230':'repeat(230, minmax(145px, 150px))',
        
      }
    },
  },
  plugins: [],
}

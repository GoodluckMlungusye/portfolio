
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },

      boxShadow: {
        '3xl': '20px 20px 50px rgba(0,0,0,0.5)',
        '4xl': '0 5px 20px rgba(0,0,0,0.05)'
      },

      colors: {
        'mirror-gray': '#948989',
      },

      backdropBlur: {
        xs: '2px',
      },

      letterSpacing: {
        widest: '.125em',
        btn: '.25em',
      },

      keyframes: {
       text : {
          '100%' : {opacity: '1'}
        },
       progress: {
          '100%': {transform: 'scaleX(1)'}
       }
      },

      animation: {
        text : 'text 0.5s 1s linear forwards',
        progress: 'progress 1s cubic-bezier(1,0,0.5,1) forwards',
        sprogress: 'progress 1s 1s cubic-bezier(1,0,0.5,1) forwards',
        pseudoprogress: 'text 0.5s 1.5s linear forwards'
      }

    },
  },
  plugins: [],
}



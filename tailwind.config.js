/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "whole": '#111111',
        "secondary-bg": '#EEEEEE',
      },
      textColor: {
        "whole-text": '#EEEEEE',
        "secondary-text": '#B4B4B4',
        "solid-text": '#111111',
      },
      fontFamily: {
        antonSc: ['AntonSC'],
        anton: ['Anton'],
        lato: ['Lato'], 
        roboto: ['Roboto'], 
        tanker: ['Tanker']
      },
      borderColor: {
        "grey-border": '#484848',
        "white-border": '#EEEEEE',
      },
      fontSize: {
        // PORTFOLIO
        '85/90': ['85px', '90px'],
        '85/60': ['85px', '50px'],
        '82/70': ['82px', '70px'],
        '64/76': ['64px', '76.8px'],
        '64/83': ['64px', '83.3px'],
        '30/37': ['30px', '37px'],  
        '27/36': ['27.62px', '36.04px'], 
        '20/26': ['20px', '26.4px'],
        '15/18': ['15px', '18px'],
        '14/19': ['14px', '19.6px'],
        '72/72': ['72px', '58.6px'],
        '9/12': ['10px', '12.24px'],
        '12/15': ['12px', '15.84px'],
        '16/22': ['16px', '22.72px'],
        '18/25': ['18px', '25.56px'],
        '24/34': ['24px', '34.08px'],
        '34/48': ['34px', '48.28px'],
        '47/62': ['47px', '62.04px'],
        '48/62': ['47px', '62.04px'],
        '31/45': ['31px', '45.04px'],
        //mobile responsive
        '28/39': ['28px', '39.76px'],
        '12/17': ['12px', '17.04px'],
        '10/13': ['10px', '13.2px'],
        '24/32.4': ['24px', '32.4px'],
      },
    },
  },
  plugins: [],
};

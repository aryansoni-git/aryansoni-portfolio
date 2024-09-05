const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
      },
      spacing: {
        "responsive-padding-x": 'calc(1rem + (8 - 1) * ((100vw - 20rem) / (100 - 20)))',
        "responsive-padding-y": 'calc(2rem + (4 - 2) * ((100vw - 20rem) / (100 - 20)))',
      },
      colors: {
        'warm-orange': "#FF4800",
        'light-white': "#C0C0C0",
        'black-border': "#404040",
      },
      backgroundImage: {
        'custom-card': 'linear-gradient(227deg, #151515 0%, #171717 100%)',
      },
      boxShadow: {
        'custom-orange': '0 0 20px #FF4800, 0 0 60px #FF4800, 0 0 100px #FF4800',
      },
      transitionProperty: {
        'background': 'background-color, background-image',
      }
    },
  },
  plugins: [],
};

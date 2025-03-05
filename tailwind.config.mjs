/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: "#81c408",
        yellow: "#FFB524",
        grey: '#45595B',
        lightgrey: '#f4f6f8'
      },
      fontFamily: {
        Raleway: 'Raleway, serif',
      },
      screens: {
        sm: {
          max: "767px"
        },
        md:{
          min:"768px",
          max:"991px"
        },
        lg:{
          min:"992px",
          max:"1280px"
        },
        xl:{
          min:"1281px"
        },
        xxl:{
         min:"1281px",
         max:"1440px"
        }
      }

    },
  },
  plugins: [],
};

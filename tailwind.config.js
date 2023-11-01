/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100" : "hsla(27, 40%, 89%, 1)",
        "primary-200" :"hsla(27, 40%, 82%, 1)",
        "primary-300" : "hsla(27, 40%, 72%, 1)",
        "primary-400" : "hsla(27, 40%, 63%, 1)",
        "primary-500" : "#B8845A",
        "primary-600" : "hsla(27, 50%, 45%, 1)",
        "primary-700" : "hsla(27, 50%, 37%, 1)",
        "primary-800" : "hsla(27, 50%, 30%, 1)",
        "primary-900" : "hsla(27, 50%, 22%, 1)",
        "primary-1000" : "hsla(27, 50%, 15%, 1)",
        "primary-1100" : "hsla(27, 50%, 9%, 1)",
        "secondary-100" : "hsla(24, 1%, 80%, 1)",
        "secondary-200" :"hsla(24, 1%, 67%, 1)",
        "secondary-300" : "hsla(24, 1%, 51%, 1)",
        "secondary-400" : "hsla(24, 2%, 35%, 1)",
        "secondary-500" : "hsla(24, 4%, 18%, 1)",
        "secondary-600" : "hsla(24, 45%, 2%, 1)",
        "secondary-700" : "hsla(24, 45%, 2%, 1)",
        "secondary-800" : "hsla(24, 45%, 1%, 1)",
        "secondary-900" : "hsla(24, 45%, 1%, 1)",
        "secondary-1000" : "hsla(24, 45%, 1%, 1)",
        "secondary-1100" : "hsla(24, 45%, 0%, 1)",
        "tertiary-100" : "hsla(36, 45%, 100%, 1)",
        "tertiary-200" :"hsla(36, 45%, 99%, 1)",
        "tertiary-300" : "hsla(36, 45%, 99%, 1)",
        "tertiary-400" : "hsla(36, 45%, 99%, 1)",
        "tertiary-500" : "hsla(36, 45%, 98%, 1)",
        "tertiary-600" : "hsla(36, 45%, 98%, 1)",
        "tertiary-700" : "hsla(36, 4%, 82%, 1)",
        "tertiary-800" : "hsla(36, 2%, 65%, 1)",
        "tertiary-900" : "hsla(36, 1%, 49%, 1)",
        "tertiary-1000" : "hsla(36, 1%, 33%, 1)",
        "tertiary-1100" : "hsla(36, 1%, 20%, 1)",
      },
      backgroundImage :{
        "hero-bg" : "url('./src/assets/bg img.png')",
        "spotlight-bg" : "url('./src/assets/Spotlight.png')" 
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "sans-serif"],
        "gfs-didot" : ["GFS Didot", "sans-serif"],
        "exo" : ["Exo", "sans-serif"],
        "arima" : ["Arima", "sans-serif"]
      },
      boxShadow: {
        'primary-shadow': '0px 16px 32px 0px rgba(238, 226, 215, 0.24), 0px -16px 32px 0px rgba(238, 226, 215, 0.24)',
        'secondary-shadow' : "0px 16px 32px 0px rgba(238, 226, 215, 0.24), 0px -16px 32px 0px rgba(238, 226, 215, 0.24)",
      },
      backgroundPosition: {
        'halves': '50% 50%'
      },
      screens: {
        "xs" : "476px"
      },
      fontSize:{
        "heading-one" : ["40px", "1.4em"],
        "heading-two" : ["36px", "1.4em"],
        "heading-three" : ["32px", "1.4em"],
        "heading-four" : ["28px", "1.5em"],
        "heading-five" : ["24px", "1.5em"],
        "heading-six" : ["20px", "1.5em"],
        "large": ["20px", "1.6em"],
        "base" : ["16px", "1.6em"],
        "caption" : ["12px", "1.6em"]
      },
    },
  },
  plugins: [],
}


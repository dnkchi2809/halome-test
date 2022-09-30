/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro": "SF Pro Display",
      },
      backgroundImage: {
        "halome-light": "url('../public/img/Halome logo.png')",
        "halome-dark": "url('../public/img/Halome logo white.png')",
        "menu-light": "url('../public/img/Menu.png')",
        "menu-dark": "url('../public/img/Menu_white.png')",
        "cursor-light": "url('../public/img/Down_Cursor.png')",
        "cursor-dark": "url('../public/img/Down_Cursor_White.png')",
        "up-cursor-dark": "url('../public/img/Up_Cursor_White.png')",
        "landing-page": "url('../public/img/Background_Black.png')",
      },
      keyframes: {
        translate1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-250px)" },
        },
        translate2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-150px)" },
        },
        translate3: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(100px) translateX(-50px)" },
        },
        translate4: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(50px)" },
        },
        star1: {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(300px) translateX(-600px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(300px) translateX(-600px)",
            opacity: 0,
          },
        },
        star2: {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(150px) translateX(-300px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(150px) translateX(-300px)",
            opacity: 0,
          },
        },
        star3: {
          "0%": {
            transform: "translateY(0) translateX(0)",
            opacity: 1,
          },
          "50%": {
            transform: "translateY(300px) translateX(-600px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(300px) translateX(-600px)",
            opacity: 0,
          },
        },
        nightSky: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1.1,
          },
        },
        discover1: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "250px",
          },
        },
        discover2: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "250px",
          },
        },
        scaleImage :{
          "0%": {
            transform : "scale(1) translateY(0)"
          },
          "100%": {
            transform : "scale(9) translateY(40px)"
          },
        }
      },

      animation: {
        "translate-1": "translate1 10s linear infinite",
        "translate-2": "translate2 13s ease-in-out infinite",
        "translate-3": "translate3 10s ease-in-out infinite",
        "translate-4": "translate4 10s linear infinite",
        "star-1": "star1 5s ease-out infinite",
        "star-2": "star2 3s ease-out infinite",
        "star-3": "star3 4s ease-out infinite",
        "night-sky": "nightSky 2s ease-out",
        "discover-1": "discover1 1s ease-out forwards",
        "discover-2": "discover2 1.8s ease-out forwards",
        "scale-image": "scaleImage 1.5s ease-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

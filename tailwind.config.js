/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0fcfec",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#141A1F",

          "base-100": "#F3F3F7",

          info: "#6CAFEA",

          success: "#19E1BC",

          warning: "#F5C238",

          error: "#F14B59",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "linear-gradient(150deg, #FFF 0%, #FFF4F4 84.51%)",
        button: "linear-gradient(135deg, #F8BFBF 0%, #EE8B8B 100%)",
      },
      boxShadow: {
        button: "0px 15px 20px 0px rgba(198, 110, 110, 0.25)",
      },
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
      },
    },
  },
  plugins: [],
};

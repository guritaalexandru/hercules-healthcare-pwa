/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./js/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'desktop': {'max': '1440px',},
        'laptop': {'max': '1200px',},
        'm-tablet': {'max': '990px',},
        'tablet': {'max': '767px',},
        'mobile': {'max': '480px',},
        'small-mobile': {'max': '350px',},
      },
    },
  },
  plugins: [],
};

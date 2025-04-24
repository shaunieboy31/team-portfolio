module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your source files
  ],
  theme: {
    extend: {
      animation: {
        swing: "swing 3s ease-in-out infinite", // Continuous swing animation
      },
      keyframes: {
        swing: {
          "0%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(-10deg)" },
        },
      },
    },
  },
  plugins: [],
};
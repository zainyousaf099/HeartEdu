/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
      extend: {
          animation: {
              fadeIn: "fadeIn 2s ease-out", // Animation duration set to 2 seconds
          },
          keyframes: {
              fadeIn: {
                  "0%": { opacity: "0" },  // Start with opacity 0
                  "100%": { opacity: "1" }, // End with opacity 1
              },
          },
      },
  },
  plugins: [],
}

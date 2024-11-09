/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"], // Update this path if needed
  theme: {
    extend: {
      screens: {
        'xsm':'0',
        'sm': '745px',
        'md': '900px', // Overwrite md breakpoint or use custom name
      },
    },
  },
  plugins: [],
};



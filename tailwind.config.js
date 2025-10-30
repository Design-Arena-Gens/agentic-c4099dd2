/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "grid-radial": "radial-gradient(circle at center, rgba(59,130,246,0.25), rgba(13,17,23,0) 60%)"
      },
      colors: {
        quantum: {
          50: "#f3f5ff",
          100: "#e7ecff",
          200: "#cfd8ff",
          300: "#a5b5ff",
          400: "#748bff",
          500: "#4f62ff",
          600: "#3b4be6",
          700: "#2f3cb2",
          800: "#252f87",
          900: "#1c2466"
        }
      }
    }
  },
  plugins: []
};

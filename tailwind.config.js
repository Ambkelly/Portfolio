module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo 2", "sans-serif"],
        code: ["Source Code Pro", "monospace"],
        leckerli: ["Leckerli One", "cursive"],
      },
    },
    boxShadow: {
      'custom-lg': '0px 4px 10px rgba(0, 0, 0, 0.2)',
      'custom-hover': '0px 8px 15px rgba(0, 0, 0, 0.25)',
    },
    screens: {
      xs: "480px",
      ss: "640px",
      md: "768px",
      lg: "1060px",
      // lg: "1200px",
      // xl: "1700px",
    },
  },
  variants: {
    extend: {
      // Add any custom variants here if needed
    },
  },
  plugins: [
    // Add any custom plugins here if needed
  ],
};
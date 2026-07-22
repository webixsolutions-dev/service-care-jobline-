/** @type {import('tailwindcss').Config} */

// Brand-specific tokens (per-site overrides -- swap these when cloning to the other 6 sites)
// Mirrored in src/config/brand.ts for use in non-class contexts (e.g. inline SVG fills).
const brand = {
  navy: {
    DEFAULT: "#0A1930",
    light: "#0F2340",
    dark: "#081426",
  },
  gold: {
    DEFAULT: "#F0A428",
    light: "#F5B94F",
    dark: "#D68F1C",
  },
  teal: {
    DEFAULT: "#14B8A6",
    light: "#2DD4C4",
    dark: "#0F8F81",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand,
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

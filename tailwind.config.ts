import type { Config } from "tailwindcss";

// Design tokens for Busia Farmers Supplies Limited.
// See docs/DESIGN.md for the rationale behind these choices.
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16241A",       // near-black deep green — headings, dark text
        field: "#1F4D2B",     // rich crop green — nav, dark section backgrounds
        fieldlight: "#3E7A45",// fresh leaf green — accents on dark backgrounds
        harvest: "#E0A526",   // golden wheat — primary accent, CTAs
        clay: "#9C4A24",      // soil terracotta — secondary accent, status flags
        parchment: "#F3ECDD", // warm khaki-parchment — section backgrounds
        paper: "#FCFAF4",     // near-white — default page background
        stone: "#5C5646"      // warm grey-brown — secondary text
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-worksans)", "system-ui", "sans-serif"]
      },
      maxWidth: {
        prose: "68ch"
      }
    }
  },
  plugins: []
};

export default config;

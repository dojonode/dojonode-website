const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [
    createThemes({
      paper: {
        secondaryColor: "#f8c4cf",
        tertiaryColor: "#808080",
        backgroundColor: "#FFF9EB",
        textColor: "#444444",
        nodeTypesColorActive: "#E81899",
        progressBarFillColor: "#F8C4CF",
        progressBarBackgroundColor: "#E0E7EC",
        cardBackgroundColor: "#F4F4F4",
        cardTitleColor: "#E81899",
        cardSubBodyColor: "#9A989F",
        inputAccentColor: "#E0E7EC",
        glowColor: "#0000004C",
        themeSwitcherColor: "#F4AB9F",
      },
      light: {
        secondaryColor: "#f8c4cf",
        tertiaryColor: "#808080",
        backgroundColor: "#FFFFFD",
        textColor: "#444444",
        nodeTypesColorActive: "#E81899",
        progressBarFillColor: "#F8C4CF",
        progressBarBackgroundColor: "#E0E7EC",
        cardBackgroundColor: "#F4F4F4",
        cardTitleColor: "#E81899",
        cardSubBodyColor: "#9A989F",
        inputAccentColor: "#E0E7EC",
        glowColor: "#0000004C",
        themeSwitcherColor: "#F4AB9F",
      },
      dark: {
        secondaryColor: "#f8c4cf",
        tertiaryColor: "#cecece",
        backgroundColor: "#1a1b1b",
        textColor: "#F4F4F4",
        nodeTypesColorActive: "#E81899",
        progressBarFillColor: "#E13A8C",
        progressBarBackgroundColor: "#707D75",
        cardBackgroundColor: "#444444",
        cardTitleColor: "#ec4899",
        cardSubBodyColor: "#BDC0BA",
        inputAccentColor: "#707D75",
        glowColor: "#ffffffb3",
        themeSwitcherColor: "#F4AB9F",
      },
    })
  ],
};

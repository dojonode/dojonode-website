const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  plugins: [
    createThemes({
      paper: {
        primaryColor: "#e81899",
        secondaryColor: "#f8c4cf",
        tertiaryColor: "#808080",
        backgroundColor: "#FFF9EB",
        textColor: "#444444",
        nodeTypesColorActive: "#E81899",
        progressBarFillColor: "#F8C4CF",
        progressBarBackgroundColor: "#E0E7EC",
        cardBackgroundColor: "#f5f5f5",
        cardTitleColor: "#E81899",
        cardSubBodyColor: "#9A989F",
        settingsAccentColor: "#E0E7EC",
        settingsBtnColor: "#9baab2",
      },
      light: {
        primaryColor: "#e81899",
        secondaryColor: "#f8c4cf",
        tertiaryColor: "#808080",
        backgroundColor: "#FFFFFD",
        textColor: "#444444",
        nodeTypesColorActive: "#E81899",
        progressBarFillColor: "#F8C4CF",
        progressBarBackgroundColor: "#E0E7EC",
        cardBackgroundColor: "#f5f5f5",
        cardTitleColor: "#E81899",
        cardSubBodyColor: "#9A989F",
        settingsAccentColor: "#E0E7EC",
        settingsBtnColor: "#9baab2",
      },
      dark: {
        primaryColor: "#e81899",
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
        settingsAccentColor: "#707D75",
        settingsBtnColor: "#9baab2",
      },
    })
  ],
};

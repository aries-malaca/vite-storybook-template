import colors from "tailwindcss/colors";

export const defaultPreset = {
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
};

export default defaultPreset;

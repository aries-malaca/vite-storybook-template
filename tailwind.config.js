/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
  presets: [require("./src/presets/default.js").default],
};

module.exports = {
  content: ["./src/**/*.{html,md,njk}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), "prettier-plugin-tailwindcss"],
};

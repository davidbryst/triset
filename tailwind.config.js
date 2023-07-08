/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary) ",
        secondary: "var(--color-secondary)",
        gray: "var(--color-gray)",
        trans: "var(--color-trans)",
      },
      borderColor: {
        borderGray: "var(--border-gray)",
      }
    },
  },
  plugins: [],
};

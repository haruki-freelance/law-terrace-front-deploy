/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@digital-go-jp/tailwind-theme-plugin')],
};

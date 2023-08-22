/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#151515',
      primary: '#032C52',
      success: '#33D73E',
      danger: '#E93820',
      warning: '#F29F2C',
      info: '#1770C2',
      bg: '#F3F3F3',
      grey: '#909090',
      lightGrey: '#E2E2E2',
    },
  },
  plugins: [],
};

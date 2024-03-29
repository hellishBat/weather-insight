module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      colors: {
        // custom colors
      },
      fontFamily: { sans: ['Raleway', 'sans-serif'] },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['4rem', { lineHeight: '1.2' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}; 
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
  ],
  darkMode: false,
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

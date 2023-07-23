module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}', 'node_modules/preline/dist/*.js',],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        custom: ['Nunito'],
      },
      colors: {
        offwhite: '#EEEEEE',
        accent: {
          primary: '#508dff',
          secondary: '#50b5ff',
          main: '#2a7fff',
          backdrop: '#F8F9FD',
          100: '#eaf4ff',
          200: '#8fc3ff',
          300: '#1d88fe',
          400: '#086cd9',
        },
        neutral: {
          100: '#fff',
          200: '#f7f9fc',
          300: '#f1f3f8',
          400: '#e9edf4',
          500: '#b1b7c5',
          600: '#707480',
          700: '#3e434d',
          800: '#181b1f',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [require('preline/plugin'),],
};

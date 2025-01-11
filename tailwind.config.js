/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/aboutPage/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
      },
      colors: {
        'cmu-maroon': '#721C40',
        'cmu-maroon-darker': 'rgb(91, 22, 51)',
        'cmu-maroon-lighter': 'rgb(140, 55, 89)',
        'oratory-blue': '#00008B',
        'oratory-yellow': '#FFD700',
        'oratory-red': '#8B0000',
        'focus-color-1':'#e9eaeb',
        'focus-color-2': '#2fa6ff',
        'focus-color-3': '#003862',
        'focus-color-4': '#1d1d1d',
        'cmu-blue': 'rgb(31,103,226)',
        'cmu-yellow': 'rgb(255,200,4)',
        'cmu-green': 'rgb(0,168,107)'
      },
      transitionDuration: {
        '1500': '1500ms', // Add a 1.5-second duration
        '2000': '2000ms', // Add a 2-second duration
        '3000': '3000ms', // Add a 3-second duration
      },
    },
  },
  plugins: [],
}


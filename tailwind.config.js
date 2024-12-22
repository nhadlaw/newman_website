/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'oratory-blue': '#06038D',
        'oratory-yellow': '#FFD700',
        'oratory-red': '#8B0000'
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


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 2s ease-out',
        'fade-in-quick': 'fadeIn 1s ease-out',
        'fade-in-delay': 'fadeIn 2s ease-out 0.5s',
        'slide-up': 'slideUp 1.5s ease-out',
        'slide-down': 'slideDown 1.5s ease-out',
        'slide-right': 'slideRight 1.5s ease-out',
        'slide-left': 'slideLeft 1.5s ease-out',
        'spin-slow': 'spin 10s linear infinite',
        'pulse-fast': 'pulseFast 0.5s ease-in-out infinite',
        'scale-up': 'scaleUp 1.2s ease-out',
        'scale-down': 'scaleDown 1.2s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseFast: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.2)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.8' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          '0%': { 
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': { 
            transform: 'translate(0px, 0px) scale(1)', },
        },
      },
    },
  },
  plugins: [],
};

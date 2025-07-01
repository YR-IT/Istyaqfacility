/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#faf7f2',
          100: '#f4ede2',
          200: '#e8d8c4',
          300: '#d9bd9c',
          400: '#c8a075',
          500: '#bc8a5a',
          600: '#af7c4f',
          700: '#926543',
          800: '#77543c',
          900: '#614731',
          950: '#342418',
        },
        cream: {
          50: '#fefdf9',
          100: '#fefaf0',
          200: '#fcf2dd',
          300: '#f9e7c0',
          400: '#f4d799',
          500: '#edc56b',
          600: '#e4b049',
          700: '#bf8f3b',
          800: '#9a7333',
          900: '#7d5e2d',
          950: '#453116',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
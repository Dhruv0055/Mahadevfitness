/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07080a',
          900: '#0c0e12',
          850: '#11141a',
          800: '#181b22',
          700: '#232732',
          600: '#323745',
        },
        brand: {
          DEFAULT: '#FF2A2A',
          hover: '#E01E1E',
          glow: 'rgba(255, 42, 42, 0.4)',
          subtle: 'rgba(255, 42, 42, 0.12)',
        },
        accent: {
          amber: '#FF9F1C',
          neon: '#2EC4B6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', '"Oswald"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest: '0.2em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

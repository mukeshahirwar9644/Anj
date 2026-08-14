/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#FDF7F4',
          100: '#FBF0E9',
          200: '#F5DDD0',
          300: '#EABCA4',
          400: '#DD9574',
          500: '#C85A32',
          600: '#B85028',
          700: '#993E1B',
          800: '#7E341B',
          900: '#672E19',
          950: '#38150A',
        },
        brown: {
          50: '#F8F6F4',
          100: '#EFEBE7',
          200: '#D9CFCA',
          300: '#BAAAA4',
          400: '#97827B',
          500: '#7B6761',
          600: '#63514C',
          700: '#4A3B36',
          800: '#3A2518',
          900: '#2A1810',
          950: '#1C100B',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EADCC9',
          400: '#DFC6AA',
        },
        sand: '#EADCC9',
        peach: '#F5DFD5',
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(58, 37, 24, 0.08)',
        'elevated': '0 20px 40px -15px rgba(58, 37, 24, 0.12)',
        'glow': '0 0 25px rgba(200, 90, 50, 0.25)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

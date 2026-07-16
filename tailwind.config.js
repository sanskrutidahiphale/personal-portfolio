/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        base: {
          950: '#05070F',
          900: '#0A0E1A',
          800: '#0F1524',
          700: '#151D30',
        },
        line: '#1F2A44',
        accent: {
          blue: '#4C7CFF',
          violet: '#9B5CFF',
          pink: '#FF5CB3',
        },
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(120deg, #4C7CFF 0%, #9B5CFF 100%)',
        'grad-radial-blue': 'radial-gradient(circle, rgba(76,124,255,0.35) 0%, rgba(76,124,255,0) 70%)',
        'grad-radial-violet': 'radial-gradient(circle, rgba(155,92,255,0.35) 0%, rgba(155,92,255,0) 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 108, 255, 0.25)',
        'glow-lg': '0 20px 60px rgba(76, 124, 255, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ada: {
          red: '#A6192E',        // Primary brand color (ADA Red)
          'red-bright': '#D4253D', // Hover states, accents
          teal: '#008996',       // Links, secondary highlights
          green: '#0F851F',      // Success states
          'alert-red': '#EC2227', // Error/urgent alerts
          'dark-gray': '#3A3A3A', // Primary body text
          'near-black': '#111827', // Headings
          'muted-gray': '#737373', // Secondary/caption text
          'warm-gray': '#D9D9D6', // Borders, dividers
          'light-pink': '#F9EFF0', // Subtle accent backgrounds
          white: '#FFFFFF',      // Page backgrounds
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 9, 47, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(204, 9, 47, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

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
          red: '#A6192E',        // Primary brand red (diabetes.org)
          blue: '#0070D2',       // Salesforce/help blue
          navy: '#003B71',       // Deep blue for hero backgrounds
          teal: '#008996',       // ADA accent teal (diabetes.org)
          light: '#F3F3F3',      // Light gray background
          gray: '#54698D',       // Medium gray for text
          border: '#DDDBDA',     // Border color
          darkgray: '#3E3E3C',   // Dark text
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

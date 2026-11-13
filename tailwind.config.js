/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseNavy: '#0A0F2C',
        cardNavy: '#111827',
        borderBorder: '#1E2A3A',
        primaryText: '#F0EDE4',
        secondaryText: '#9CA3AF',
        avGold: '#F5C518',
        avCyan: '#00D4FF',
        avAmber: '#FFAA00',
        avEmerald: '#10B981',
        avPurple: '#7C3AED',
        avRed: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'btn': '10px',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gaming color palette for infight.io
        'game': {
          'bg': '#0a0a0a',
          'surface': '#1a1a1a',
          'border': '#333333',
          'primary': '#e74c3c',
          'secondary': '#3498db',
          'success': '#27ae60',
          'warning': '#f39c12',
          'danger': '#e74c3c',
          'text': '#ffffff',
          'muted': '#888888',
          'accent': '#9b59b6'
        }
      },
      fontFamily: {
        'game': ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'game': '0 4px 8px rgba(231, 76, 60, 0.3)',
        'game-lg': '0 8px 16px rgba(231, 76, 60, 0.4)'
      }
    }
  },
  plugins: []
}

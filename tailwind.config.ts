/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['Merriweather', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #111216 95%, #4251625c)',
      },
      maxWidth: {
        '1220px': '1220px',
      },
      colors: {
        primary: '#FF5733',
        secondary: '#2D2D2D',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'accent-8': '#121212',
        'accent-9': '#111216',
        success: '#0070f3',
        cyan: '#79FFE1',
        khaki: 'rgb(233, 218, 172)'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontWeight: {
        'normal': 400,
        'semibold': 600,
        'bold': 700
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}


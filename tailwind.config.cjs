/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    screens: {
      sm: '648px',
      md: '900px',
      lg: '1160px',
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'fbActions': "url('/src/assets/fb-collections/fb-actions.png')",
        'fbIcons': "url('/src/assets/fb-collections/fb-icons.png')",
        'fbImgs': "url('/src/assets/fb-collections/fb-imgs.png')",
        'fbLinks': "url('/src/assets/fb-collections/fb-links.png')",
      },
      colors: {
        'fb-blue': '#1877f2',
        'fb-white': '#ffffff',
        'fb-bg': '#f0f2f5',
        'fb-gray': '#65676b',
        'fb-lightgray': '#e4e6eb',
        'fb-black': '#050505'
      }
    },
  },
  plugins: [],
}

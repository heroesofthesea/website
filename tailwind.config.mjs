/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'hots-green': '#0E6500',
        'hots-gold': '#877300',
        'hots-yellow': '#FEFE00',
        'hots-red': '#FC0000',
      },
      fontFamily: {
        'logo': ['"Google Sans Flex"', 'sans-serif'],
        'sans': ['"Google Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

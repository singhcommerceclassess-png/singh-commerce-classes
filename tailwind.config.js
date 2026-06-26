/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#F5E6D3',
        'bg-section-alt': '#FDF3E8',
        'brand-orange': {
          DEFAULT: '#E8621A',
          dark: '#C4511A',
          light: '#FDECD9',
        },
        navy: {
          DEFAULT: '#0B2545',
          light: '#1B3A6B',
        },
        'royal-blue': '#1A56DB',
        'light-blue': '#EFF6FF',
        'blue-border': '#BFDBFE',
        charcoal: '#374151',
        'gray-mid': '#6B7280',
        success: '#059669',
        error: '#DC2626',
        whatsapp: '#25D366',
      },
    },
  },
  plugins: [],
}

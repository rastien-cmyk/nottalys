/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}",
    "./src/**/*.{svg,png,jpg,jpeg,webp}"
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs Nottalys (depuis votre CSS original)
        'nottalys-purple': '#6b1f78',
        'nottalys-purple-dark': '#551964',
        'nottalys-beige': '#D9D6ED',
        'nottalys-beige-dark': '#c9c6dd',
        'nottalys-bg-alt': '#f5f1eb',
      },
      boxShadow: {
        'nottalys': '0 10px 25px rgba(107, 31, 120, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

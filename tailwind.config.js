/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Booking.com's signature dark blue, used for the header + hero
        "booking-blue": "#003580",
        // The bright blue used for buttons and links
        "booking-accent": "#0071c2",
      },
    },
  },
  plugins: [],
};

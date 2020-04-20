module.exports = {
  theme: {
    fontFamily: {
      sans: ['Tahoma', 'Verdana', 'Segoe', 'sans-serif'],
    },
    extend: {
      // inset: {}
    },
  },
  variants: {
    borderWidth: [
      'responsive',
      'first',
      'last',
      'hover',
      'focus',
    ],
  },
  plugins: [
    // https://www.notion.so/Tailwind-UI-Documentation-f9083ed0e2694690ac89253e88afb2b6
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
};

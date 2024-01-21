/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow':'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;',
        gridTemplateColumns: {
          // Simple 16 column grid
          'grid-col': 'repeat(200px`, minmax(0, 1fr))',
    },
  },
  plugins: [],
}
}
}
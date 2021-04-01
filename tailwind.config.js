module.exports = {
  purge: ["./src/**/*.js"],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        laranja: '#ff9637',
        amarelo: '#fdcf84',
        preto: '#3a3a55',
        vermelho: '#b52c51',
        azul: '#0FAEBF'
      },
    },
  },
  variants: {},
  plugins: ['@tailwindcss/forms'],
}

const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Ótica Santa Luzia",
    author: "@bellmont-sistema",
    description: "5 Motivos para investir na lente de filtro azul",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ótica Santa Luzia",
        short_name: "Ótica Santa Luzia",
        start_url: "/",
        background_color: '#fdcf84',
        theme_color: '#fdcf84',
        icon: "static/avatar.png",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}

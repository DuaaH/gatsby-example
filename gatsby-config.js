module.exports = {
  siteMetadata: {
    title: `Gatsby Data Fetching Examples`,
    description: `Examples for data fetching at build time and runtime.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Recipes`,
        fieldName: `recipes`,
        url: `http://www.recipepuppy.com/api/?i=onions`,
      },
    },
  ],
}
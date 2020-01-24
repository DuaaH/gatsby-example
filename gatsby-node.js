const path = require(`path`)
const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`http://www.recipepuppy.com/api/?i=onions`)
  const resultData = await result.json()
  console.log("res", resultData.results);

  // // create node for build time data example in the docs
  createNode({
    recipes: resultData.results,
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const recipeTemplate = path.resolve(`./src/templates/recipe.js`)
  const res = await graphql(`
    {
  example(recipes: {}, id: {}) {
    recipes {
      thumbnail
      ingredients
      href
      title
    }
  }
}
`)

  res.data.example.recipes.forEach(recipe => {
    console.log("hi", recipe.title);

    createPage({
      component: recipeTemplate,
      path: `/recipe/${recipe.title[0]}`,
      context: {
        title: recipe.title
      }
    })
  });
}

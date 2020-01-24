const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-recipe-js": hot(preferDefault(require("/home/duaa/gatsby/gatsby-example/src/templates/recipe.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/duaa/gatsby/gatsby-example/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/duaa/gatsby/gatsby-example/src/pages/index.js"))),
  "component---src-pages-recipe-js": hot(preferDefault(require("/home/duaa/gatsby/gatsby-example/src/pages/recipe.js")))
}


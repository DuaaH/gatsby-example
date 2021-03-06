// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-recipe-js": () => import("../src/templates/recipe.js" /* webpackChunkName: "component---src-templates-recipe-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-recipe-js": () => import("../src/pages/recipe.js" /* webpackChunkName: "component---src-pages-recipe-js" */)
}


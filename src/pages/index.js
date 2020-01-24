import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Recipes from "../components/recipes"


const IndexPage = () => {



  const gatsbyRecipes = useStaticQuery(
    graphql`
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
`
  )

  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <Recipes recipes={gatsbyRecipes.example.recipes} />
      </div>
    </Layout>
  )
}

export default IndexPage
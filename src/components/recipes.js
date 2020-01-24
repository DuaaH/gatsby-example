import React from 'react';

import Link from "@reach/router"

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map((recipe) => {
        return (
          <div key={recipe.title} className="col-md-4" style={{ marginBottom: "2rem" }}>
            <div className="recipes__box">
              <img
                className="recipe__box-img"
                src={recipe.thumbnail}
                alt={recipe.title} />

              <h5 className="recipes__title">
                {recipe.title}
              </h5>
              <a href={`/recipe/${recipe.title[0]}/`}> View more</a>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
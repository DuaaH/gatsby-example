import React from 'react';
import { graphql } from "gatsby";

export default ({ pageContext: { recipe } }) => (
  <section>
    {recipe.title}
  </section>
)

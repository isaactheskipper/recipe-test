import React from 'react';
import Recipe from './Recipe';

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))
      ) : (
        <p>No recipes available</p>
      )}
    </div>
  );
}

export default RecipeList;

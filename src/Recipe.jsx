import React from 'react';

function Recipe({ recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Ingredients: {recipe.ingredients.join(', ')}</p>
      <p>Difficulty: {recipe.difficulty}</p>
    </div>
  );
}

export default Recipe;

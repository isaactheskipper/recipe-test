import React, { useState } from 'react';
import RecipeList from './RecipeList';
import DifficultyFilter from './DifficultyFilter';

const recipes = [
  { name: 'Tomato Soup', ingredients: ['Tomato', 'Garlic', 'Salt'], difficulty: 'Easy' },
  { name: 'Chicken Curry', ingredients: ['Chicken', 'Onion', 'Spices'], difficulty: 'Medium' },
  { name: 'Pasta Salad', ingredients: ['Pasta', 'Olives', 'Cheese'], difficulty: 'Easy' }
];

function RecipeFinder() {
  const [difficulty, setDifficulty] = useState('');

  const filteredRecipes = difficulty
    ? recipes.filter(recipe => recipe.difficulty === difficulty)
    : recipes;

  return (
    <div>
      <h1>Recipe Finder</h1>
      <DifficultyFilter setDifficulty={setDifficulty} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default RecipeFinder;

import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <p>Kcal: {recipe.calories.toFixed(2)}</p>
      <a href={recipe.url} target="_blank" rel="noopener noreferrer">Pełen przepis</a>
    </div>
  );
};

export default RecipeCard;
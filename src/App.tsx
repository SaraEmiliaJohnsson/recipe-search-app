import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}


const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState<number | null>(null);
  const [noResults, setNoResults] = useState(false);
  const [animate, setAnimate] = useState(false);


  const handleSearchResults = (recipes: Recipe[]) => {
    setRecipes(recipes);
    setNoResults(recipes.length === 0);
    setCurrentRecipeIndex(recipes.length > 0 ? 0 : null);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      gsap.fromTo(
        '.recipe-card',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
      );
      setAnimate(false);
    }
  }, [animate, currentRecipeIndex]);

  const handleNextRecipe = () => {
    if (currentRecipeIndex !== null && currentRecipeIndex < recipes.length - 1) {
      setCurrentRecipeIndex(currentRecipeIndex + 1);
      setAnimate(true);
    }
  };

  const handlePreviousRecipe = () => {
    if (currentRecipeIndex !== null && currentRecipeIndex > 0) {
      setCurrentRecipeIndex(currentRecipeIndex - 1);
      setAnimate(true);
    }
  };

  return (
    <div className="app">
      <h1>Recipe Search App</h1>
      <div className="search-container">
        <SearchBar onSearch={handleSearchResults} />
      </div>
      <div className="recipe-list">
        {noResults && <p>No results found.</p>}
        {currentRecipeIndex !== null && (
          <div className="recipe-navigation">
            <div className="btn-container">
              <button onClick={handlePreviousRecipe} disabled={currentRecipeIndex === 0}>
                &lt; Previous
              </button>

              <button onClick={handleNextRecipe} disabled={currentRecipeIndex === recipes.length - 1}>
                Next &gt;
              </button>
            </div>
            <RecipeCard recipe={recipes[currentRecipeIndex]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App

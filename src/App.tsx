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
  const [noResults, setNoResults] = useState(false);
  const [animate, setAnimate] = useState(false);


  const handleSearchResults = (recipes: Recipe[]) => {
    setRecipes(recipes);
    setNoResults(recipes.length === 0);
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
  }, [animate]);

  return (
    <>
      <section className="app">
        <h1>Recipe Search App</h1>
        <SearchBar onSearch={handleSearchResults} />
        <div className='recipe-list'>
          {noResults && <p>No results found.</p>}
          {recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </section>

    </>
  )
}

export default App

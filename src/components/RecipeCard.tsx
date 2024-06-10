

interface RecipeCardProps {
    recipe: {
        idMeal: string;
        strMeal: string;
        strMealThumb: string;
        strInstructions: string;
    };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <section className="recipe-card">
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p>{recipe.strInstructions}</p>
        </section>
    );
};

export default RecipeCard;
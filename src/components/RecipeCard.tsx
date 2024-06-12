

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

            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2>{recipe.strMeal}</h2>
            <p>{recipe.strInstructions}</p>
        </section>
    );
};

export default RecipeCard;
import React from "react";
import IngredientsList from "./components/IngredientsList";
import AiRecipe from "./components/AiRecipe.jsx";
import { getRecipeFromMistral } from "./ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState(["water"]);

  const [recipe, setRecipe] = React.useState("");
  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  //   Auto scroll to recipe when recipe state has recipe
  const recipeSection = React.useRef(null);
  React.useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Tequila"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          ref={recipeSection}
        />
      )}

      {recipe && <AiRecipe recipe={recipe} />}
    </main>
  );
}

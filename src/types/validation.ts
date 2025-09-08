import { Recipe } from ".";

// Validation function used to make sure AI response is the correct format
export function isRecipe(obj: unknown): obj is Recipe {
  if (typeof obj !== "object" || obj === null) return false;

  const recipe = obj as any;

  return (
    typeof recipe.name === "string" &&
    typeof recipe.description === "string" &&
    Array.isArray(recipe.instructions) &&
    Array.isArray(recipe.ingredients) &&
    typeof recipe.cookTime === "number" &&
    typeof recipe.prepTime === "number" &&
    typeof recipe.nutrition === "object" &&
    recipe.nutrition !== null &&
    typeof recipe.nutrition.calories === "number" &&
    typeof recipe.nutrition.fat === "number" &&
    typeof recipe.nutrition.carbs === "number" &&
    typeof recipe.nutrition.protein === "number"
  );
}

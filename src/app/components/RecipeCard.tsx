"use client";

import { Recipe } from "@/types";
import { isRecipe } from "@/types/validation";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
      <div className="p-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{recipe.name}</h1>
        <p className="pb-4 text-gray-700">{recipe.description}</p>

        <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
          Difficulty
        </h2>
        <p className="text-gray-700">{recipe.difficulty}</p>
        <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
          Ingredients
        </h2>
        <ul className="list-disc pl-5 text-gray-700">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>

        <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
          Cooking time
        </h2>
        <p className="text-gray-700">{recipe.cookTime} min</p>

        <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
          Preparation Time
        </h2>
        <p className="text-gray-700">{recipe.prepTime} min</p>

        <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
          Nutrition
        </h2>
        <p className="text-gray-700">
          Calories: {recipe.nutrition.calories} <br />
          Carbs: {recipe.nutrition.carbs} <br />
          Fat: {recipe.nutrition.fat} <br />
          Protein: {recipe.nutrition.protein}
        </p>
      </div>
    </div>
  );
}

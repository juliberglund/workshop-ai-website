"use client";

import { Recipe } from "@/types";
import dummyRecipe from "@/data/dummyRecipe.json";

import { isRecipe } from "@/types/validation";

if (!isRecipe(dummyRecipe)) {
  throw new Error("Dummy recipe data is invalid");
}

const recipe: Recipe = dummyRecipe;

export default function RecipeCard() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0"></div>
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            {recipe.name}
          </h1>
          <p className="pb-4">{recipe.description}</p>
          <img
            src="/sushi.avif"
            alt={recipe.name}
            className="w-full h-80 object-cover object-center rounded-lg mb-4"
          />

          <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
            Ingredients
          </h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>

          <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
            Cooking time
          </h2>
          <p>{recipe.cookTime} min</p>

          <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
            Preparation Time
          </h2>
          <p>{recipe.prepTime} min</p>

          <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
            Nutrition
          </h2>
          <p>
            Calories: {recipe.nutrition.calories} <br />
            Carbs: {recipe.nutrition.carbs} <br />
            Fat: {recipe.nutrition.fat} <br />
            Protein: {recipe.nutrition.protein}
          </p>
        </div>
      </div>
    </div>
  );
}

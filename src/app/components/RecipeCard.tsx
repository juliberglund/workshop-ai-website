import { Recipe } from "@/types";
import dummyRecipe from "@/data/dummyRecipe.json";
import { Lora } from "next/font/google";

const recipe: Recipe = dummyRecipe;

export default function RecipeCard() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center p-10">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 text-center mb-10">
          <h1 className="text-red-400 text-5xl font-bold mb-6">
            "Foody Goody"
          </h1>
          <p className="text-2xl font-bold text-red-200 pb-4">
            your recipe generator
          </p>

          <div className="flex items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Type of food (e.g. sushi, pasta...)"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-cyan-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Generate
            </button>
          </div>
        </div>

        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              {recipe.name}
            </h1>
            <p className="pb-4">{recipe.description}</p>
            <img
              src="/sushi2.jpeg"
              alt={recipe.name}
              className="pl-40 w-auto h-80 object-cover object-center"
            />

            <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
              Ingredients
            </h2>
            <p>{recipe.ingredients}</p>

            <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
              Cooking time
            </h2>
            <p>{recipe.cookTime} min</p>

            <h2 className="mt-6 text-2xl font-bold mb-2 text-gray-800">
              Preparation Time
            </h2>
            <p>{recipe.prepTime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

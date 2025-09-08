"use client";

import { useState } from "react";
import { Recipe } from "@/types";
import dummyRecipe from "@/data/dummyRecipe.json";
import { Input } from "./iu/input";
import { Select } from "./iu/select";
import { TextGif } from "./iu/text-gif";
import { isRecipe } from "@/types/validation";

if (!isRecipe(dummyRecipe)) {
  throw new Error("Dummy recipe data is invalid");
}

const recipe: Recipe = dummyRecipe;

export default function RecipeCard() {
  const [foodType, setFoodType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const selectOptions = [
    { label: "Select your level", value: "" },
    { label: "I am a beguinner", value: "easy" },
    { label: "I am intermidate", value: "medium" },
    { label: "I am advanced", value: "hard" },
  ];
  const gifUrls = [
    "https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif",
    "https://media.giphy.com/media/fnglNFjBGiyAFtm6ke/giphy.gif",
  ];
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/varios-vegetales-.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center p-10 space-y-10">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 mt-10 text-center">
          <TextGif
            gifUrl={gifUrls[0]}
            text="Foody Goody"
            size="xxl"
            weight="medium"
          />
          <p className="text-2xl font-bold text-orange-400 opacity-70 pb-4">
            your recipe generator
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Input
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              placeholder="Type of food (e.g. sushi, pasta...)"
              className="flex-1"
            />

            <Select
              options={selectOptions}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="flex-1 text-stone-400"
            />

            <button className="bg-cyan-800 text-white font-semibold px-6 py-2 rounded-lg hover:bg-cyan-600 transition">
              Generate
            </button>
          </div>

          <div className="mt-6"></div>
        </div>

        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2 text-gray-800">
              {recipe.name}
            </h1>
            <p className="pb-4">{recipe.description}</p>
            <img
              src="/otro-sushi.avif"
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
    </div>
  );
}

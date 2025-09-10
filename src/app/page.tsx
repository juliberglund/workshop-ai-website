"use client";

import RecipeCard from "./components/RecipeCard";

import { useState } from "react";
import { APIResponse, Recipe } from "@/types";
import dummyRecipe from "@/data/dummyRecipe.json";
import { Input } from "./components/iu/input";
import { TextGif } from "./components/iu/text-gif";
import { isRecipe } from "@/types/validation";

export default function Home() {
  const [foodType, setFoodType] = useState("");
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  //we need useState for Error and Loading

  async function fetchData() {
    const res = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: foodType }),
    });
    const data: APIResponse<Recipe> = await res.json();
    return data;
  }

  // here we need the messages if data success or not

  return (
    <div className="relative min-h-screen w-full h-full">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/vegetables-.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center p-10 space-y-10">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 mt-10 text-center">
          <TextGif
            className="p-1"
            gifUrl="https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif"
            text="Foody Goody"
            size="xxl"
            weight="medium"
          />
          <p className="text-2xl font-bold text-orange-400 opacity-70 pb-4">
            Your Recipe Generator
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Input
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              placeholder="Type of food (e.g. sushi, pasta...)"
              className="flex-1"
            />

            <button className="bg-black text-white font-semibold px-6 py-2 rounded-lg hover:bg-fuchsia-700 transition"
            
            onClick={fetchData}>
              Generate
            </button>
          </div>

          <div className="mt-6"></div>
        </div>
        {recipe && <RecipeCard recipe={recipe} />}

      </div>
    </div>
  );
}

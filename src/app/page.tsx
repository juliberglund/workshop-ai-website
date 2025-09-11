"use client";

import RecipeCard from "./components/RecipeCard";
import { useState } from "react";
import { APIResponse, Recipe } from "@/types";
import { Input } from "./components/iu/input";
import { TextGif } from "./components/iu/text-gif";

export default function Home() {
  const [foodType, setFoodType] = useState("");
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setLoading(true);
    setError(null);
    setRecipe(null); // 🧹 limpiar receta anterior

    try {
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: foodType }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data: APIResponse<Recipe> = await res.json();

      if (data.success && data.data) {
        setRecipe(data.data);
      } else {
        setError(data.error || "Could not fetch recipe");
      }
    } catch (err: any) {
      console.error("fetchData error:", err.message);
      setError("Something went wrong while fetching the recipe");
    } finally {
      setLoading(false);
    }
  }

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
            weight="semi"
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

            <button
              className="bg-black text-white font-semibold px-6 py-2 rounded-lg hover:bg-fuchsia-700 transition disabled:opacity-50"
              onClick={fetchData}
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

        {recipe && <RecipeCard recipe={recipe} />}
      </div>
    </div>
  );
}

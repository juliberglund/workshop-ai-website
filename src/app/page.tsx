"use client";

import RecipeCard from "./components/RecipeCard";

import { useState } from "react";
import { Recipe } from "@/types";
import dummyRecipe from "@/data/dummyRecipe.json";
import { Input } from "./components/iu/input";
import { Select } from "./components/iu/select";
import { TextGif } from "./components/iu/text-gif";
import { isRecipe } from "@/types/validation";

export default function Home() {
  const [foodType, setFoodType] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const selectOptions = [
    { label: "Select your level", value: "" },
    { label: "I am a beginner", value: "easy" },
    { label: "I am intermediate", value: "medium" },
    { label: "I am advanced", value: "hard" },
  ];
  const gifUrls = [
    "https://media.giphy.com/media/3zvbrvbRe7wxBofOBI/giphy.gif",
    "https://media.giphy.com/media/fnglNFjBGiyAFtm6ke/giphy.gif",
  ];
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
            gifUrl={gifUrls[0]}
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

            <Select
              options={selectOptions}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="flex-1 text-stone-400"
            />

            <button className="bg-black text-white font-semibold px-6 py-2 rounded-lg hover:bg-fuchsia-700 transition">
              Generate
            </button>
          </div>

          <div className="mt-6"></div>
        </div>
        <RecipeCard />
      </div>
    </div>
  );
}

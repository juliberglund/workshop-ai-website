import { Recipe, RecipeRequest } from "@/types";
import { model } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: RecipeRequest = await req.json();

    const prompt = `Generate a recipe using these ingredients: ${body.prompt}. 
    Respond ONLY in valid JSON that matches this TypeScript type: 
    {
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: number;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
  nutrition: { calories: number; fat: number; carbs: number; protein: number };
}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const recipe: Recipe = JSON.parse(text);

    return NextResponse.json({
      success: true,
      data: recipe,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || "An error occurred",
    });
  }
}

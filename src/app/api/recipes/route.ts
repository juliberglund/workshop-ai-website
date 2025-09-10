import { NextResponse } from "next/server";
import { Recipe, RecipeRequest, APIResponse } from "@/types";
import { isRecipe } from "@/types/validation";
import { model } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const body: RecipeRequest = await req.json();

    const prompt = `Generate a recipe using these ingredients: ${body.prompt}. 
    Respond ONLY with valid JSON (no extra text, no markdown).
    The JSON must match this exact TypeScript type: 
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

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });
    const text = result.response.text();
    console.log("AI response:", text);
    let recipe: Recipe;
    try {
      const parsed = JSON.parse(text);
      if (!isRecipe(parsed)) {
        throw new Error("AI response is not a valid Recipe");
      }
      recipe = parsed;
    } catch (err) {
      console.error("Failed to parse AI response:", text);
      throw new Error("Invalid recipe format returned from AI");
    }

    return NextResponse.json<APIResponse<Recipe>>({
      success: true,
      data: recipe,
    });
  } catch (error: any) {
    return NextResponse.json<APIResponse<null>>({
      success: false,
      error: error.message || "An error occurred",
    });
  }
}

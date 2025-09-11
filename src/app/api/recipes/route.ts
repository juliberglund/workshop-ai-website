import { NextResponse } from "next/server";
import { Recipe, RecipeRequest, APIResponse } from "@/types";
import { isRecipe } from "@/types/validation";
import { model } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const body: RecipeRequest = await req.json();

    const prompt = `
You are a backend API that generates cooking recipes.
The user will give you a dish name or a request like "give me a recipe for oxfile pasta" or "how to cook oxfile pasta".

Your response must follow these rules strictly:
1. Respond with ONLY valid JSON.
2. Do not include any text before or after the JSON.
3. Do not include markdown formatting like \`\`\`json or \`\`\`.
4. The JSON must strictly match this TypeScript type:

{
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: number;
  prepTime: number;
  difficulty: "easy" | "medium" | "hard";
  nutrition: { calories: number; fat: number; carbs: number; protein: number };
}

Details:
- "name": the final dish name.
- "description": 1–2 sentences about the dish.
- "instructions": array of clear step-by-step instructions.
- "ingredients": array of ingredients with quantities.
- "cookTime" and "prepTime": integers (minutes).
- "difficulty": "easy", "medium", or "hard".
- "nutrition": integers for calories, fat, carbs, protein.

Now generate a recipe for: ${body.prompt}
`;

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
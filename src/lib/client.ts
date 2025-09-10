import { Recipe, RecipeRequest, APIResponse } from "@/types";


export async function fetchRecipe(
  request: RecipeRequest
): Promise<APIResponse<Recipe>> {
  const res = await fetch("/api/recipe", {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: APIResponse<Recipe> = await res.json();
  return data;
}

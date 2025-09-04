export interface Recipe {
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: number;
  prepTime: number;
  nutrition: { calories: number; fat: number; carbs: number; protein: number };
}

export interface RecipeRequest {
  prompt: string;
}

export interface APIResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

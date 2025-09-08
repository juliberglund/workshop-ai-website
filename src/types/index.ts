// Core recipe data structure
export interface Recipe {
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: number;
  prepTime: number;
  nutrition: { calories: number; fat: number; carbs: number; protein: number };
}

// User input sent to AI API
export interface RecipeRequest {
  prompt: string;
}

// API response wrapper
export interface APIResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

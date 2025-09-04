export interface Recipe {
  name: string;
  description: string;
  instructions: string[];
  ingredients: string[];
  cookTime: number;
  prepTime: number;
  nutrition: [{ calories: number }, { fat: number }, { carbs: number }, { protein: number }];
}

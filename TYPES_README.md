# Type System & Validation Documentation

## Core Types

### Recipe Interface

The main data structure representing a recipe returned by the AI API.

```typescript
interface Recipe {
  name: string; // Recipe title
  description: string; // Brief description of the dish
  instructions: string[]; // Step-by-step cooking instructions
  ingredients: string[]; // List of required ingredients
  cookTime: number; // Cooking time in minutes
  prepTime: number; // Preparation time in minutes
  nutrition: {
    // Nutritional information
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  };
}
```

### RecipeRequest Interface

User input structure for AI API requests.

```typescript
interface RecipeRequest {
  prompt: string; // User's recipe request (e.g., "pasta with mushrooms")
}
```

### APIResponse Interface

Generic wrapper for all API responses ensuring consistent error handling.

```typescript
interface APIResponse<T> {
  data?: T; // Response data (present on success)
  error?: string; // Error message (present on failure)
  success: boolean; // Indicates if request was successful
}
```

## Validation System

### isRecipe() Type Guard

Validates unknown objects against the Recipe interface. **Must be used** to verify AI API responses.

## Integration Examples

### For API

```typescript
// In your API route
try {
  const aiResponse = await callAIAPI(userPrompt);

  if (aiResponse === null) {
    return { error: "Please enter a food-related request", success: false };
  }

  if (isRecipe(aiResponse)) {
    return { data: aiResponse, success: true };
  } else {
    return { error: "Invalid recipe format", success: false };
  }
} catch (error) {
  return { error: "AI API failed", success: false };
}
```

### For UI

```typescript
// In your component
const response: APIResponse<Recipe> = await fetchRecipe(userInput);

if (response.success && response.data) {
  // Display recipe
  setRecipe(response.data);
} else {
  // Show error message
  setError(response.error);
}
```

## Test Data

Dummy recipe data is available in `/src/data/dummyRecipe.json` for UI development and testing.

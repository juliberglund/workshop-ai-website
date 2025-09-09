"use client";

import { isRecipe } from "@/types/validation";
import dummyRecipe from "@/data/dummyRecipe.json";

export default function TypeGuardTestPage() {
  // Ett giltigt "recept" från dummyRecipe.json
  const validRecipe = dummyRecipe;

  // Ett ogiltigt "recept"
  const invalidRecipe = { foo: "bar" };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testa isRecipe Type Guard</h1>
      <div className="mb-4">
        <h2 className="font-semibold">Giltigt recept (dummyRecipe):</h2>
        <pre>{JSON.stringify(validRecipe, null, 2)}</pre>
        <p>
          <b>isRecipe:</b> {isRecipe(validRecipe) ? "✅ TRUE" : "❌ FALSE"}
        </p>
      </div>
      <div>
        <h2 className="font-semibold">Ogiltigt recept:</h2>
        <pre>{JSON.stringify(invalidRecipe, null, 2)}</pre>
        <p>
          <b>isRecipe:</b> {isRecipe(invalidRecipe) ? "✅ TRUE" : "❌ FALSE"}
        </p>
      </div>
    </div>
  );
}

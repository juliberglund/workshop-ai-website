# Foody Goody – AI Recipe Generator

Foody Goody is a web app that generates cooking recipes based on your input and skill level.  
You can enter a type of food and select your experience level, and the app will suggest a recipe using AI or test data.

## Demo script – How to test the app

Follow these steps to demo and test the full flow of the project:

1. **Start the development server**

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

2. **Open the app in your browser**  
   Go to [http://localhost:3000](http://localhost:3000)

3. **Try generating a recipe**
   - Enter a type of food (e.g. `pasta`, `sushi`, etc.) in the input field.
   - Select your cooking level (e.g. Beginner, Intermediate, Advanced).
   - Click the **Generate** button.
   - The app will display a recipe card (using either AI or dummy data).

4. **Test error handling**
   - Try submitting the form with empty fields or invalid input.
   - The app should show an error message or handle the error gracefully.

5. **Test type guard validation**
   - Visit [http://localhost:3000/typeguard-test](http://localhost:3000/typeguard-test)
   - This page shows how the `isRecipe` type guard works with both valid and invalid data.

6. **Test with dummy data**
   - The app uses `/src/data/dummyRecipe.json` for development and testing.
   - You can modify this file to test how the UI responds to different recipe data.

---

**Tip:**  
If you want to test API integration or error states, you can temporarily break the API route or modify the dummy data to simulate errors.

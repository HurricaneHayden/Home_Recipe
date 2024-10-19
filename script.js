// Sample recipes data (could be expanded or fetched from a backend)
const recipes = {
    "Chili": ["Ground Beef", "Tomatoes", "Tomato Sauce", "Peppers"],
    "Pasta": ["Pasta", "Tomato Sauce", "Garlic", "Olive Oil"],
    "Tacos": ["Ground Beef", "Taco Shells", "Lettuce", "Cheese"],
    "Chicken Stir Fry": ["Chicken Breast", "Bell Peppers", "Soy Sauce"],
    "Chicken Soup": ["Chicken", "Carrots", "Onions", "Celery"]
};

// Function to find matching recipes based on user input
function findRecipesByIngredients(userInput) {
    const userIngredients = userInput.toLowerCase().split(',').map(ingredient => ingredient.trim());
    const matchingRecipes = [];

    for (const [recipe, ingredients] of Object.entries(recipes)) {
        const recipeIngredients = ingredients.map(ingredient => ingredient.toLowerCase());
        if (userIngredients.some(input => recipeIngredients.some(ingredient => ingredient.includes(input)))) {
            matchingRecipes.push(recipe);
        }
    }
    return matchingRecipes;
}

// Handle the button click event
document.getElementById('findRecipesButton').addEventListener('click', () => {
    const userInput = document.getElementById('ingredientsInput').value;
    const matchingRecipes = findRecipesByIngredients(userInput);
    const recipeList = document.getElementById('recipeList');

    // Clear previous results
    recipeList.innerHTML = '';

    if (matchingRecipes.length > 0) {
        matchingRecipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe;
            recipeList.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No recipes found with the provided ingredients.';
        recipeList.appendChild(li);
    }
});

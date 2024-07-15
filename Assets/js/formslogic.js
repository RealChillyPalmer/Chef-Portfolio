const render = function () {
        //creates new variables for user cookbook and new array to store recipes 
    const allRecipes = JSON.parse(localStorage.getItem('cookBook'));
    const recipeList = [];

        //for loop - adds a new recipe string for each recipe in user cookbook to display on page
    for (let i = 0; i < allRecipes.length; i++) {
        const element = allRecipes[i];
        const strRecipes = `${element.thisRecipeName} ${element.recipeIngredients} ${element.recipeInstructions}`
        recipeList.push(strRecipes)
    };
        //forEach loop - creates a new "card" for each recipe in cookbook and displays on index.html div id: cookBookSec
    recipeList.forEach((recipe) => {
        const newCard = document.createElement("card");
        const newRecipeSection = document.createTextNode(recipe);
        newCard.appendChild(newRecipeSection);
        const currentDiv = document.getElementById("cookBookSec");
        currentDiv.appendChild(newCard, currentDiv);
    });
};



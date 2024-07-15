const listForm = document.querySelector('#listForm');
const addButton = document.querySelector('#addButton');
const listSubButton = document.querySelector('#subButton');
const ingAmount = document.querySelector('#amountList');
const ingOther = document.querySelector('#otherAmountBox');
const ingMeasure = document.querySelector('#measureType');
const ingIngredient = document.querySelector('#ingredient');
const instructionForm = document.querySelector('#recipeInstructions');
const addRecipeButton = document.querySelector('#addToCookbook');

let ingredientList = [];
    //keeps local storage from refreshing on reload if there is any
const userRecipes = JSON.parse(localStorage.getItem('cookBook')) || [];

    //This adds current Ingredient to Recipe Ingredient List
addButton.addEventListener('click', function (event) {
    event.preventDefault();
              //creates ingredient from form inputs
        const ingredienT = {
            Amnt: ingAmount.value,
            OtherAmnt: ingOther.value,
            Measure: ingMeasure.value,
            Ingredient: ingIngredient.value,
        };
            //adds ingredient to ingredient list
        ingredientList.push(ingredienT);
        localStorage.setItem('ingredient', JSON.stringify(ingredientList));

            //displays ingredient list on instruction form
        const lastIngredient = JSON.parse(localStorage.getItem('ingredient'));
        const latestIngredientList = [];
        
        for (let i = 0; i < lastIngredient.length; i++) {
            const element = lastIngredient[i];
            const strIngredient = `${element.Amnt} ${element.OtherAmnt} ${element.Measure} ${element.Ingredient}`
            latestIngredientList.push(strIngredient)
        }
        document.querySelector("#ingredientCard").textContent = `${latestIngredientList.map(function (ingredient) {
            return ingredient;
        }
        
    )}`;
    localStorage.setItem('ingList', JSON.stringify(latestIngredientList));
    return latestIngredientList;
});

    //This Submits ingredient list and displays Recipe Instruction form with ingredient list entered
listSubButton.addEventListener('click', function (event) {
    event.preventDefault();
    const recInst = document.getElementById("recipeInstructions");

        //displays recipe instruction form
    if (recInst.style.display = "none") {
        recInst.style.display = "inline";
    };    
        //displays ingredient lis on form
    const ingList = JSON.parse(localStorage.getItem('ingList'));
    document.querySelector("#userRecipeList").textContent = ingList;
});

    //This function handles the final submission of the Recipe and storage of all user recipes.
function submittOr(event) {
    event.preventDefault();
    
        //captures values for recipe
    let recipeName = document.getElementById("recipeName").value;
    let recipeIngredients = JSON.parse(localStorage.getItem('ingList'));
    const recipeInstructions = document.getElementById("recipeInput");
    
        //creates var for new recipe
    const newRecipe = {
        thisRecipeName: recipeName,
        recipeIngredients: recipeIngredients,
        recipeInstructions: recipeInstructions.value,
    };
        //adds new recipe to all user recipes
    localStorage.setItem('newRecipe', JSON.stringify(newRecipe));
    userRecipes.push(newRecipe);

        //re-stores user recipes with new addition 
    localStorage.setItem('cookBook', JSON.stringify(userRecipes));

    //refreshes all fields of form to enter new recipe
    document.getElementById("recipeName").value = '*New Recipe*';
    document.getElementById("listForm").reset();
    document.getElementById("recipeInstructions").reset();
    document.getElementById("ingredientCard").textContent = "";
    document.querySelector("#userRecipeList").textContent = '';
    localStorage.setItem('ingList', "null");
    localStorage.setItem('ingredient', "null");
    ingredientList = [];   
};

document.getElementById("recipeInstructions").addEventListener('submit', submittOr);




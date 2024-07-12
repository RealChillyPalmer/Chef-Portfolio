const listForm = document.querySelector('#listForm');
const addButton = document.querySelector('#addButton');
const listSubButton = document.querySelector('#subButton');

const ingAmount = document.querySelector('#amountList');
const ingOther = document.querySelector('#otherAmountBox');
const ingMeasure = document.querySelector('#measureType');
const ingIngredient = document.querySelector('#ingredient');

const instructionForm = document.querySelector('#recipeInstructions');
const addRecipeButton = document.querySelector('#addToCookbook');

// const userRecipe = //Both Forms Together
// const cookBook = //Object of all recipe's added

// const ___ = function () {
// }

    //When listSub button is pressed, user is taken to instructionForm


    //add button adds current ingredient to [ingredient list] and refreshes form to add another ingredient//
const ingredientList = [];

    
addButton.addEventListener('click', function (event) {
        event.preventDefault();
        
        const ingredienT = {
            Amnt: ingAmount.value,
            OtherAmnt: ingOther.value,
            Measure: ingMeasure.value,
            Ingredient: ingIngredient.value,
        };
        
        
        console.log(ingredienT);
         

        ingredientList.push(ingredienT);
        console.log(ingredientList);
        localStorage.setItem('ingredient', JSON.stringify(ingredientList));

        const lastIngredient = JSON.parse(localStorage.getItem('ingredient'));
        
        const latestIngredientList = [];
        
        for (let i = 0; i < lastIngredient.length; i++) {
            const element = lastIngredient[i];
            const strIngredient = `${element.Ingredient} ${element.Measure} ${element.Amnt} ${element.OtherAmnt}`
            latestIngredientList.push(strIngredient)
        }

        console.log(latestIngredientList);
        document.querySelector("#ingredientCard").textContent = `${latestIngredientList.map(function (ingredient) {
            return ingredient;
        }
    )}`;
        

    });

    //list is saved to local storage and presented on instructionForm when submitted

// const ____ = function () {
   
    //when addRecipeButton is pressed, listForm and instructionForm are combined to create userRecipe
    //userRecipe is saved to local storage and displayed with other userRecipe objects

// }




addEventListener // listSubButton
addEventListener // addRecipeButton
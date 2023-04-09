import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.modal";
import { Ingredient } from "../shared/ingredient.modal";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1200px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
            [
                new Ingredient('Meat',1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Big Burger',
            'A large sized Burger',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cKjbFpdJGH5t7p_InqdY3yyOHLTZDmCp1Q&usqp=CAU',
            [
                new Ingredient('Buns',2),
                new Ingredient('Potatoes', 2),
                new Ingredient('Onion', 1),
                new Ingredient('Capsicum', 1)
            ]
        )
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // we only get a capy of the recipe array, since it is private using slice method 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
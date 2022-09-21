import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
// uso esta variable para guardar el path a la imagen de comida y se lo paso abajo
const imagenDefault = 'https://th.bing.com/th/id/OIP.TQ6I-KjX3ZR9yyybkRQ4HQHaDt?pid=ImgDet&rs=1';

@Injectable ()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    

    recipes: Recipe[] = [
        new Recipe(
          'Tasty  schnizel',
           'A super-tasty Schnizel-just awesome!',
            imagenDefault,[
              new Ingredient('Meat',1),
              new Ingredient('French Fries', 20)
              
            ]),
        new Recipe('Big fat burguer',
         'what else you need to say?',
         'https://th.bing.com/th/id/OIP.hCXsT6DE8Dt0A0KsQzmKZwHaF0?pid=ImgDet&rs=1',[
            new Ingredient('Buns',1),
            new Ingredient('Meat', 1)
          ]),
      ];

      constructor(private slService: ShoppingListService){

      }
      getRecipes(){
        return this.recipes.slice();
      }
      getRecipe(index: number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);

      }
}
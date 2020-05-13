import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "This is a test description",
      "https://static01.nyt.com/images/2020/02/10/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg",
      [
        new Ingredients('Meat', 1),
        new Ingredients('French Fries', 20)
      ]),
    new Recipe(
      "A test recipe",
      "This is a test description two",
      "https://static01.nyt.com/images/2020/02/10/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg",
      [
        new Ingredients('Meat', 1),
        new Ingredients('French Fries', 20)
      ])
  ];

  getRecipe() {
    //slice will return a new array without returning the reference of the original array
    return this.recipes.slice();
  }

  addIngredientsTOShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngrediants(ingredients);
  }

}

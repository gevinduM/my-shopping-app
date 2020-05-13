import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  //since we are passing a copy of adding items for the original array will not reflect on the view,
  //so emmiting an event, so that can supbscribe from shopping-list

  ingredientsAdded = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apples', 5),
    new Ingredients('Banana', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  ingrediantAdded(ingredients: Ingredients) {

    this.ingredients.push(ingredients);
    this.ingredientsAdded.emit(this.ingredients.slice());

  }

  addIngrediants(ingredients: Ingredients[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }
}

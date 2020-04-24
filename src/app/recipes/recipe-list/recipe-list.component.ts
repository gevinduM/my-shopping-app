import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onChangeRecipe = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe("A test recipe", "This is a test description", "https://static01.nyt.com/images/2020/02/10/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg"),
    new Recipe("A test recipe", "This is a test description two", "https://static01.nyt.com/images/2020/02/10/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onClickRecipe(recipe:Recipe){

    this.onChangeRecipe.emit(recipe);

  }

}

import { Ingredients } from '../shared/ingredients.model'

export class Recipe {

    public name: string;
    public description: string;
    public imagepath: string;
    public ingredients: Ingredients[];


    constructor(name: string, des: string, imgePath: string, ingredients: Ingredients[]) {
        this.name = name;
        this.description = des;
        this.imagepath = imgePath;
        this.ingredients = ingredients;
    }
}
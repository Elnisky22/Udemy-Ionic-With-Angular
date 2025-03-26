import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aglio_e_olio.jpg/250px-Aglio_e_olio.jpg',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string): Recipe {
    const recipe = this.recipes.find(r => r.id === id);
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return recipe as Recipe;
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(r => r.id !== recipeId);

  }
}

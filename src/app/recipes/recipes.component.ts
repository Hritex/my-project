import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  @Input() recipeItem: string | any;

  getRecipeItem(itemName: string) {
    this.recipeItem = itemName;
    console.log(itemName);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | any;
  @Output() recipeSelected = new EventEmitter<void>(); //So that we can listen to this event from outside.
  
  onSelected() {
    this.recipeSelected.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | any;
  @Output() clickedItem = new EventEmitter<string>();
  clickedLink: string = 'link';

  onClick() {
    this.clickedItem.emit(this.clickedLink);
  }
  
}

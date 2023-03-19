import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef | any;
  @ViewChild('amountInput') amountInputRef: ElementRef | any;
  @Output() ingredientAdded = new EventEmitter<Ingredient>(); 
  /* Or can also use 
  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();*/

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value; // These values are not going to change so "const"
    const newIngredient = new Ingredient(ingName, ingAmount); // Should use const if you are not going to change the value
    this.ingredientAdded.emit(newIngredient);
  }

}

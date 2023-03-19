import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput! : ElementRef;
  @ViewChild('amountInput') amountInput! : ElementRef;
  ingredient: Ingredient[] = [];

  onAdd(newNameInput: HTMLInputElement, newAmountInput: HTMLInputElement) {
    newNameInput = this.nameInput.nativeElement.value;
    newAmountInput = this.amountInput.nativeElement.value;
    console.log(newNameInput, newAmountInput);
    this.ingredient.push({'name': newNameInput, 'amount': newAmountInput});
  }

}

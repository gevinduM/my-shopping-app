import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients} from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;

@Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){

    this.ingredientAdded.emit(new Ingredients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));

  }

}

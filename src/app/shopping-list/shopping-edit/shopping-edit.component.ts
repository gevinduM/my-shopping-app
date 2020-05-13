import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredients} from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

@ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
@ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;



  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    this.ShoppingListService.ingrediantAdded(new Ingredients(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { ShoppingItem } from './models/shopping-item.model';
import { AppState } from './app-state.model';
import { AddItemAction, ADD_ITEM_V2 } from './actions/shopping.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };
  newShoppingItem2: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
  }

  addItem() {

    //this.newShoppingItem.id = uuid();

    this.newShoppingItem2.id = uuid();

    //this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.store.dispatch(ADD_ITEM_V2({payload : this.newShoppingItem2 }));

   // this.newShoppingItem = { id: '', name: '' };

    this.newShoppingItem2 = { id: '', name: '' };
    console.log(this);
  }
}

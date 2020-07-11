import { Action, createAction, props } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) { }
}

export type ShoppingAction = AddItemAction;

export const ADD_ITEM_V2 = createAction('[SHOPPING] Add Item', props <{payload: ShoppingItem}>() );

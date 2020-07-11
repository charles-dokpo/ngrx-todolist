import { ShoppingActionTypes, ShoppingAction, ADD_ITEM_V2 } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: Array<ShoppingItem> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Diet Coke',
  }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}

const ShoppingReducer2 = createReducer(initialState,
  on (ADD_ITEM_V2, (state, {payload}) => ({...state, id : payload.id, name : payload.name }))
  );

// tslint:disable-next-line: typedef
export function reducer(state: Array<ShoppingItem> | undefined, action: Action) {
    return ShoppingReducer2(state, action);
  }

import { ShoppingActionTypes, ShoppingAction, ADD_ITEM_V2, DELETE_ITEM } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.model';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: Array<ShoppingItem> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Diet Coke',
  }
];

const initialState2: any =
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Diet Coke',
  }
;


export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}

const ShoppingReducer2 = createReducer(initialState,
  on (ADD_ITEM_V2, (state, {payload}) => (([...state, payload]))),
  on(DELETE_ITEM, (state, action) => (state.filter(item => item.id !== action.payload)))
);

  //(state, {payload}) => ({...state, id : payload.id, name : payload.name }))
  //([...state, payload])

// tslint:disable-next-line: typedef
export function reducer(state: Array<ShoppingItem> | undefined, action: Action) {
    return ShoppingReducer2(state, action);
  }

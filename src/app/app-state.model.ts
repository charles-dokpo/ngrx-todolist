import { ShoppingItem } from './models/shopping-item.model';

export interface AppState {
  readonly shopping: Array<ShoppingItem>;
  readonly shopping2: Array<ShoppingItem>;
}
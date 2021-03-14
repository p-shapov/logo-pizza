import {IUIState} from '../modules/UI/types';
import {IBasketState} from '../modules/basket/types';

export interface IRootState {
  ui: IUIState,
  basket: IBasketState
}
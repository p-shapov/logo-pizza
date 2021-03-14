import {IBasketState, TBasketActions} from './types';

const basketInitialState: IBasketState = {
  productsInCartCount: 0
}

export default (state: IBasketState = basketInitialState, action: TBasketActions): IBasketState => {
  switch (action.type) {
    case 'SET_PRODUCTS_IN_CART_COUNT':
      return ({...state, productsInCartCount: action.productsInCartCount});
    default: return state;
  }
};
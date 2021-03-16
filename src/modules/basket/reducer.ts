import {BasketModule} from './namespace';

const initialState: BasketModule.IState = {
  productsInCartCount: 0
};

export default (state: BasketModule.IState = initialState, action: BasketModule.TActions): BasketModule.IState => {
  switch (action.type) {
    case 'SET_PRODUCTS_IN_CART_COUNT':
      return ({...state, productsInCartCount: action.productsInCartCount});
    default:
      return state;
  }
};
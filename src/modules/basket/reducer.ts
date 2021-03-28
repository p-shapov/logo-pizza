import {BasketModule} from './namespace';

const initialState: BasketModule.State = {
  productsInCartCount: 0,
  addToCart: (id) => console.log(id)
};

export default (state: BasketModule.State = initialState, action: BasketModule.Actions): BasketModule.State => {
  switch (action.type) {
    case 'SET_PRODUCTS_IN_CART_COUNT':
      return ({...state, productsInCartCount: action.productsInCartCount});
    default:
      return state;
  }
};
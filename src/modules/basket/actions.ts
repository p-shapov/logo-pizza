import {BasketModule} from './namespace';

export const setProductsInCartCount = (productsInCartCount: number): BasketModule.ISetProductsInCartCount => ({
  type: 'SET_PRODUCTS_IN_CART_COUNT',
  productsInCartCount
});
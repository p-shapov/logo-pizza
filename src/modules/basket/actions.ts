import {IBasketActionSetProductsInCartCount} from './types';

export const setProductsInCartCount = (productsInCartCount: number): IBasketActionSetProductsInCartCount => ({
  type: 'SET_PRODUCTS_IN_CART_COUNT',
  productsInCartCount
});
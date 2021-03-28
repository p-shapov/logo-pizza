import {BasketModule} from './namespace';

export const setProductsInCartCount = (productsInCartCount: number): BasketModule.SetProductsInCartCount => ({
  type: 'SET_PRODUCTS_IN_CART_COUNT',
  productsInCartCount
});

export const addToCart = (id: number): BasketModule.AddToCart => ({
  type: 'ADD_TO_CART',
  id
});
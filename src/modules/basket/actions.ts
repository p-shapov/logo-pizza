/* locals */
import {BasketModule} from './namespace';

export const addToCart = (product: BasketModule.Product): BasketModule.AddToCart => ({
  type: 'ADD_TO_CART',
  product
});

export const setProductCount = (id: number, count: number, size?: string): BasketModule.SetProductCount => ({
  type: 'SET_PRODUCT_COUNT',
  id,
  count,
  size
});

export const deleteProduct = (id: number, size?: string): BasketModule.DeleteProduct => ({
  type: 'DELETE_PRODUCT',
  id,
  size
});
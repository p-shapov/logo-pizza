export interface IBasketState {
  productsInCartCount: number
}

export interface IBasketActionSetProductsInCartCount {
  type: 'SET_PRODUCTS_IN_CART_COUNT',
  productsInCartCount: number
}

export type TBasketActions = IBasketActionSetProductsInCartCount;
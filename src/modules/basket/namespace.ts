export namespace BasketModule {
  export interface IState {
    productsInCartCount: number
  }
  
  export interface ISetProductsInCartCount {
    type: 'SET_PRODUCTS_IN_CART_COUNT',
    productsInCartCount: number
  }
  
  export type TActions = ISetProductsInCartCount;
}

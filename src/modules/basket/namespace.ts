export namespace BasketModule {
  export interface State {
    productsInCartCount: number,
    addToCart: (id: number) => void
  }
  
  export interface SetProductsInCartCount {
    type: 'SET_PRODUCTS_IN_CART_COUNT',
    productsInCartCount: number
  }
  
  export interface AddToCart {
    type: 'ADD_TO_CART',
    id: number
  }
  
  export type Actions = SetProductsInCartCount | AddToCart;
}

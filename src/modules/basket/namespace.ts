/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace BasketModule {
  export interface Product {
    id: number,
    title: string,
    price: number,
    size?: string,
    count: number,
    image: ImageSourcePropType
  }
  
  export interface State {
    products: Array<Product>,
    addToCart: (product: Product) => void,
    deleteProduct: (id: number, size?: string) => void,
    setProductCount: (id: number, count: number, size?: string) => void
  }
  
  export interface AddToCart {
    type: 'ADD_TO_CART',
    product: Product
  }
  
  export interface SetProductCount {
    type: 'SET_PRODUCT_COUNT',
    id: number,
    count: number,
    size?: string
  }
  
  export interface DeleteProduct {
    type: 'DELETE_PRODUCT',
    id: number,
    size?: string
  }
  
  export type Actions = DeleteProduct | SetProductCount | AddToCart;
}

export {BasketModule};

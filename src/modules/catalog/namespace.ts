/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace CatalogModule {
  export interface Product {
    id: number,
    title: string,
    description: string,
    price: number | Array<{ size: { title: string, value: string }, value: number }>,
    image: ImageSourcePropType
  }
  
  export interface Promotion {
    id: number,
    title: string,
    description: string,
    image: ImageSourcePropType
  }
  
  export interface Category {
    name: string,
    title: string,
    Icon: SvgrComponent,
    products: Array<Product>
  }
  
  export interface State {
    activeProduct: Product,
    activePromotion: Promotion,
    categories: Array<Category>,
    promotions: Array<Promotion>,
    openPromotion: (id: number) => void,
    openProduct: (id: number) => void
  }
  
  export interface SetProduct {
    type: 'OPEN_PRODUCT',
    product: Product
  }
  
  export interface SetPromotion {
    type: 'OPEN_PROMOTION',
    promotion: Promotion
  }
  
  export type Actions = SetProduct | SetPromotion;
}

export {CatalogModule};
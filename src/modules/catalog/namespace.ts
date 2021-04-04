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
    activeProductId: number,
    activePromotionId: number,
    activeCategoryId: number,
    categories: Array<Category>,
    promotions: Array<Promotion>,
    addToCart: (id: number, size?: string) => void,
    openPromotion: (id: number) => void,
    openProduct: (id: number) => void
  }
  
  export interface SetProduct {
    type: 'OPEN_PRODUCT',
    id: number
  }
  
  export interface SetPromotion {
    type: 'OPEN_PROMOTION',
    id: number
  }
  
  export type Actions = SetProduct | SetPromotion;
}

export {CatalogModule};
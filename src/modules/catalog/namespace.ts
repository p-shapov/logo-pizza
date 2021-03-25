import {ImageSourcePropType} from 'react-native';

export namespace CatalogModule {
  export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number | Array<{ size: { title: string, value: string }, value: number }>,
    image: ImageSourcePropType
  }
  
  export interface IPromotion {
    title: string,
    description: string,
    image: ImageSourcePropType
  }
  
  export interface ICategory {
    title: string,
    Icon: SvgrComponent,
    products: Array<IProduct>
  }
  
  export interface IState {
    activeProductId: number,
    activePromotionId: number,
    activeCategoryId: number,
    categories: Array<ICategory>,
    promotions: Array<IPromotion>,
    setCategory: (id: number) => void,
    setPromotion: (id: number) => void,
    setProduct: (id: number) => void
  }
  
  export interface ISetProduct {
    type: 'SET_PRODUCT',
    id: number
  }
  
  export interface ISetCategory {
    type: 'SET_CATEGORY',
    id: number
  }
  
  export interface ISetPromotion {
    type: 'SET_PROMOTION',
    id: number
  }
  
  export type TActions = ISetProduct | ISetCategory | ISetPromotion
}

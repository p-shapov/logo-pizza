import {ImageSourcePropType} from 'react-native';

namespace NCatalogListing {
  export type TProduct = {
    id: number,
    title: string,
    description: string,
    image: ImageSourcePropType,
    price: number,
    multiplePrice: boolean
  }
  
  export type TCategory = {
    title: string,
    Icon: SvgrComponent,
    items: Array<TProduct>
  }
  
  export type TPromotion = {
    title: string,
    image: ImageSourcePropType
  }
  
  export interface IListing {
    promotions: Array<TPromotion>,
    categories: Array<TCategory>,
    openProduct: (id: number) => void,
    openPromotion: (id: number) => void,
    setCategory: (id: number) => void,
    activeCategoryId: number,
    activePromotionId: number
  }
}

export default NCatalogListing;
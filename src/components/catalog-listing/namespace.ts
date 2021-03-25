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
  
  export interface IListing {
    items: Array<TCategory>,
    openProduct: (id: number) => void,
    setCategory: (id: number) => void,
    activeCategoryId: number
  }
}

export default NCatalogListing;
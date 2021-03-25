import {ImageSourcePropType} from 'react-native';

namespace NProductListing {
  export type TCard = {
    id: number,
    title: string,
    description: string,
    image: ImageSourcePropType,
    price: number,
    multiplePrice?: boolean
  }
  
  export interface ICard extends TCard {
    onPress: () => void
  }
  
  export type TListing = {
    title: string,
    items: Array<TCard>
  }
  
  export interface IListing extends TListing {
    openProduct: (id: number) => void,
    enableNestedScroll?: boolean
  }
}

export default NProductListing;
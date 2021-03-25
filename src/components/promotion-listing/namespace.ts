import {ImageSourcePropType} from 'react-native';

namespace NPromotionListing {
  export type TCard = {
    title: string,
    image: ImageSourcePropType
  }
  
  export interface ICard extends TCard {
    isLast: boolean,
    onPress: () => void
  }
  
  export interface IListing {
    items: Array<TCard>,
    openPromotion: (id: number) => void,
    activePromotionId: number
  }
}

export default NPromotionListing;
import {ImageSourcePropType} from 'react-native';

export namespace PromotionListingComponent {
  export type TPromotionCard = {
    title: string,
    image: ImageSourcePropType
  }
  
  export interface IPromotionCard extends TPromotionCard {
    onPress: () => void
  }
  
  export interface IPromotionListing {
    items: Array<TPromotionCard>,
    openPromotion: (id: number) => void,
    activePromotionId: number
  }
}
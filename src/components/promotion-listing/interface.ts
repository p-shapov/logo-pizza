import {ImageSourcePropType} from 'react-native';

interface Promotion {
  title: string,
  image: ImageSourcePropType
}

interface PromotionListingProps {
  promotions: Array<Promotion>,
  openPromotion: (id: number) => void
}

export default PromotionListingProps;
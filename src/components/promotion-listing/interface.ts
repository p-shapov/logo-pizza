/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Promotion = {
  id: number,
  title: string,
  image: ImageSourcePropType
}

interface PromotionListingProps {
  promotions: Array<Promotion>,
  openPromotion: (id: number) => void
}

export default PromotionListingProps;
/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Promotion = {
  id: string,
  title: string,
  image: ImageSourcePropType
}

interface PromotionListingProps {
  promotions: Array<Promotion>,
  openPromotion: (id: string) => void
}

export default PromotionListingProps;
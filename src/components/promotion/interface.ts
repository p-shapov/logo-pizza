/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

interface PromotionProps {
  title: string,
  description: string,
  image: ImageSourcePropType,
  close: () => void
}

export default PromotionProps;
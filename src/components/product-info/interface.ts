/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Variant = {
  id: string,
  size: { title: string, value: string },
  price: number
}

interface ProductInfoProps {
  id: string,
  title: string,
  description: string,
  image: ImageSourcePropType,
  addToCart: (count: number, id: string, variant?: string) => void,
  variants?: Array<Variant>,
  price?: number
}

export default ProductInfoProps;
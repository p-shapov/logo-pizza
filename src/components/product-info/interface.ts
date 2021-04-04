/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

interface ProductInfoProps {
  id: number,
  title: string,
  description: string,
  price: number | Array<{ size: { title: string, value: string }, value: number }>,
  image: ImageSourcePropType,
  addToCart: (id: number, size?: string) => void
}

export default ProductInfoProps;
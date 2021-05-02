/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

interface ProductInfoProps {
  id: number,
  title: string,
  description: string,
  price: number | Array<{ size: { title: string, value: string }, value: number }>,
  image: ImageSourcePropType,
  addToCart: (product: {
    id: number,
    title: string,
    price: number,
    count: number,
    image: ImageSourcePropType,
    size?: { title: string, value: string }
  }) => void
}

export default ProductInfoProps;
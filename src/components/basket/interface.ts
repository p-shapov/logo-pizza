/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

interface Product {
  id: number,
  title: string,
  price: number,
  size?: string,
  count: number,
  image: ImageSourcePropType
}

interface BasketProps {
  products: Array<Product>,
  discount?: number,
  setProductCount: (id: number, count: number, size?: string) => void,
  deleteProduct: (id: number, size?: string) => void
}

export default BasketProps;
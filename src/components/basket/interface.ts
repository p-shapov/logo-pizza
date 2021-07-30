/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Product = {
  id: string,
  title: string,
  price: number,
  count: number,
  image: ImageSourcePropType,
  variant?: string,
  size?: string
}

interface BasketProps {
  products: Array<Product>,
  addPromoCode: (code: string) => void,
  setProductCount: (count: number, id: string, variant?: string) => void,
  deleteProduct: (id: string, variant?: string) => void,
  discount?: number
}

export default BasketProps;
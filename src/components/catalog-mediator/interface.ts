/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

interface Product {
  id: number,
  title: string,
  description: string,
  image: ImageSourcePropType,
  price: number,
  multiplePrice: boolean
}

interface Category {
  name: string,
  title: string,
  Icon: SvgrComponent,
  products: Array<Product>
}

interface Promotion {
  id: number,
  title: string,
  image: ImageSourcePropType
}

interface CatalogMediatorProps {
  categories: Array<Category>,
  promotions: Array<Promotion>,
  openProduct: (id: number) => void,
  openPromotion: (id: number) => void
}

export default CatalogMediatorProps;
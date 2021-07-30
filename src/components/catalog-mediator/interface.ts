/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Product = {
  id: string,
  title: string,
  description: string,
  image: ImageSourcePropType,
  price: number,
  hasVariants: boolean
}

type Category = {
  name: string,
  title: string,
  Icon: SvgrComponent,
  products: Array<Product>
}

type Promotion = {
  id: string,
  title: string,
  image: ImageSourcePropType
}

interface CatalogMediatorProps {
  categories: Array<Category>,
  promotions: Array<Promotion>,
  openProduct: (id: string) => void,
  openPromotion: (id: string) => void
}

export default CatalogMediatorProps;
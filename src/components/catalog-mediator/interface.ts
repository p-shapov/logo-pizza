/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Product = {
  id: number,
  title: string,
  description: string,
  image: ImageSourcePropType,
  price: number,
  multiplePrice: boolean
}

type Category = {
  name: string,
  title: string,
  Icon: SvgrComponent,
  products: Array<Product>
}

type Promotion = {
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
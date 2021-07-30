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

interface ProductListingProps {
  title: string,
  products: Array<Product>,
  openProduct: (id: string) => void
}


export default ProductListingProps;
/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

type Product = {
  id: number,
  title: string,
  description: string,
  image: ImageSourcePropType,
  price: number,
  multiplePrice?: boolean
}

interface ProductListingProps {
  title: string,
  products: Array<Product>,
  openProduct: (id: number) => void
}


export default ProductListingProps;
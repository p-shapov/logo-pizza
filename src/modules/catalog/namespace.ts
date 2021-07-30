/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace CatalogModule {
  export type SetProduct = {
    type: 'OPEN_PRODUCT',
    id: string
  }

  export type SetPromotion = {
    type: 'OPEN_PROMOTION',
    id: string
  }

  export type SetProductAddedNotification = {
    type: 'SET_PRODUCT_ADDED_NOTIFICATION',
    id: string,
    variant?: string
  }

  export type Actions = SetProduct | SetPromotion | SetProductAddedNotification;

  export type Variant = {
    id: string,
    size: { title: string, value: string },
    price: number
  }

  type ProductSingle = {
    id: string,
    title: string,
    description: string,
    image: ImageSourcePropType
    price: number
  }

  type ProductWithVariants = {
    id: string,
    title: string,
    description: string,
    image: ImageSourcePropType
    variants: Array<Variant>
  }

  export type Product = ProductSingle | ProductWithVariants;

  export type Promotion = {
    id: string,
    title: string,
    description: string,
    image: ImageSourcePropType
  }

  export type Category = {
    name: string,
    title: string,
    Icon: SvgrComponent,
    products: Array<Product>
  }

  export type ProductAddedNotification = {
    title: string,
    description: string
  }

  export interface State {
    activeProduct: Product,
    activePromotion: Promotion,
    categories: Array<Category>,
    promotions: Array<Promotion>,
    productAddedNotification: string,
    openPromotion: (id: string) => void,
    openProduct: (id: string) => void,
    setProductAddedNotification: (notification: ProductAddedNotification) => void
  }
}

export default CatalogModule;
/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace CatalogModule {
  export type SetProduct = {
    type: 'OPEN_PRODUCT',
    product: Product
  }

  export type SetPromotion = {
    type: 'OPEN_PROMOTION',
    promotion: Promotion
  }

  export type SetNotification = {
    type: 'SET_NOTIFICATION',
    notification: { shown: boolean, description: string }
  }

  export type Actions = SetProduct | SetPromotion | SetNotification;

  export type Product = {
    id: number,
    title: string,
    description: string,
    price: number | Array<{ size: { title: string, value: string }, value: number }>,
    image: ImageSourcePropType
  }

  export type Promotion = {
    id: number,
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

  export type Notification = {
    title: string,
    description: string,
    shown: boolean
  }

  export interface State {
    activeProduct: Product,
    activePromotion: Promotion,
    categories: Array<Category>,
    promotions: Array<Promotion>,
    notification: Notification,
    openPromotion: (id: number) => void,
    openProduct: (id: number) => void,
    setNotification: (notification: Notification) => void
  }
}

export default CatalogModule;
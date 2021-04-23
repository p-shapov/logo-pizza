/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace BasketModule {
  export interface Product {
    id: number,
    title: string,
    price: number,
    size?: string,
    count: number,
    image: ImageSourcePropType
  }
  
  export interface Point {
    id: number,
    checked: boolean,
    street: string,
    workTime: string,
    metroStation?: {
      title: string,
      Icon: SvgrComponent
    }
  }
  
  export interface Address {
    street: string,
    floor: string,
    flat: string
  }
  
  export interface State {
    products: Array<Product>,
    deliveryMethod: 'CURRIER' | 'PICKUP',
    deliveryAddress: Address,
    pickupPoints: Array<Point>,
    setMethod: (method: 'CURRIER' | 'PICKUP') => void,
    setAddress: (address: Address) => void,
    setPoint: (id: number) => void,
    discount?: number,
    addPromoCode: (code: string) => void,
    addToCart: (product: Product) => void,
    deleteProduct: (id: number, size?: string) => void,
    setProductCount: (id: number, count: number, size?: string) => void
  }
  
  export interface AddPromoCode {
    type: 'ADD_PROMO_CODE',
    discount: number | undefined
  }
  
  export interface AddToCart {
    type: 'ADD_TO_CART',
    product: Product
  }
  
  export interface SetProductCount {
    type: 'SET_PRODUCT_COUNT',
    id: number,
    count: number,
    size?: string
  }
  
  export interface DeleteProduct {
    type: 'DELETE_PRODUCT',
    id: number,
    size?: string
  }
  
  export interface SetDeliveryMethod {
    type: 'SET_DELIVERY_METHOD',
    method: State['deliveryMethod']
  }
  
  export interface SetDeliveryAddress {
    type: 'SET_DELIVERY_ADDRESS',
    address: State['deliveryAddress']
  }
  
  export interface SetPickupPoint {
    type: 'SET_PICKUP_POINT',
    id: number
  }
  
  export type Actions =
    DeleteProduct
    | SetProductCount
    | AddToCart
    | AddPromoCode
    | SetDeliveryMethod
    | SetDeliveryAddress
    | SetPickupPoint;
}

export {BasketModule};

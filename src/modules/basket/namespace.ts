/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace BasketModule {
  export type AddPromoCode = {
    type: 'ADD_PROMO_CODE',
    discount: number | undefined
  }

  export type AddToCart = {
    type: 'ADD_TO_CART',
    count: number,
    id: string,
    variant?: string
  }

  export type SetProductCount = {
    type: 'SET_PRODUCT_COUNT',
    count: number,
    id: string,
    variant?: string
  }

  export type DeleteProduct = {
    type: 'DELETE_PRODUCT',
    id: string,
    variant?: string
  }

  export type SetDeliveryMethod = {
    type: 'SET_DELIVERY_METHOD',
    method: State['deliveryMethod']
  }

  export type SetDeliveryAddress = {
    type: 'SET_DELIVERY_ADDRESS',
    address: State['deliveryAddress']
  }

  export type SetPickupPoint = {
    type: 'SET_PICKUP_POINT',
    id: string
  }

  export type SetPaymentMethod = {
    type: 'SET_PAYMENT_METHOD',
    method: State['paymentMethod']
  }

  export type SetContactInfo = {
    type: 'SET_CONTACT_INFO',
    info: ContactInfo
  }

  export type SetWishesForOrder = {
    type: 'SET_WISHES_FOR_ORDER',
    wishes: string
  }

  export type Checkout = {
    type: 'CHECKOUT'
  }

  export type Confirm = {
    type: 'CONFIRM'
  }

  export type Actions =
    DeleteProduct
    | SetProductCount
    | AddToCart
    | AddPromoCode
    | SetDeliveryMethod
    | SetDeliveryAddress
    | SetPickupPoint
    | SetPaymentMethod
    | SetContactInfo
    | SetWishesForOrder
    | Checkout
    | Confirm;

  export type Product = {
    id: string,
    title: string,
    price: number,
    count: number,
    image: ImageSourcePropType,
    variant?: string,
    size?: string
  }

  export type Point = {
    id: string,
    checked: boolean,
    street: string,
    workTime: string,
    metroStation?: {
      title: string,
      Icon: SvgrComponent
    }
  }

  export type Address = {
    street: string,
    floor: string,
    flat: string
  }

  export type ContactInfo = {
    name: string,
    phone: string
  }

  export type OrderInfo = {
    confirmed: boolean,
    number: string
  };

  export interface State {
    products: Array<Product>,
    deliveryMethod: 'CURRIER' | 'PICKUP',
    deliveryAddress: Address,
    pickupPoints: Array<Point>,
    paymentMethod: 'CASH' | 'CARD',
    wishesForOrder: string,
    contactInfo: ContactInfo,
    orderInfo: OrderInfo,
    discount?: number,
    setDeliveryMethod: (method: 'CURRIER' | 'PICKUP') => void,
    setDeliveryAddress: (address: Address) => void,
    setPickupPoint: (id: string) => void,
    setPaymentMethod: (method: 'CASH' | 'CARD') => void,
    setWishesForOrder: (wishes: string) => void,
    setContactInfo: (info: ContactInfo) => void,
    addPromoCode: (code: string) => void,
    addToCart: (count: number, id: string, variant?: string) => void,
    deleteProduct: (id: string, variant?: string) => void,
    setProductCount: (count: number, id: string, variant?: string) => void,
    checkout: () => void,
    confirm: () => void
  }
}

export default BasketModule;

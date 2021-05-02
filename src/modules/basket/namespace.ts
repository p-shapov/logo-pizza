/* libraries and plugins */
import {ImageSourcePropType} from 'react-native';

namespace BasketModule {
  export type AddPromoCode = {
    type: 'ADD_PROMO_CODE',
    discount: number | undefined
  }

  export type AddToCart = {
    type: 'ADD_TO_CART',
    product: Product
  }

  export type SetProductCount = {
    type: 'SET_PRODUCT_COUNT',
    id: number,
    count: number,
    size?: string
  }

  export type DeleteProduct = {
    type: 'DELETE_PRODUCT',
    id: number,
    size?: string
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
    id: number
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
    id: number,
    title: string,
    price: number,
    size?: { title: string, value: string },
    count: number,
    image: ImageSourcePropType
  }

  export type Point = {
    id: number,
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
    setPickupPoint: (id: number) => void,
    setPaymentMethod: (method: 'CASH' | 'CARD') => void,
    setWishesForOrder: (wishes: string) => void,
    setContactInfo: (info: ContactInfo) => void,
    addPromoCode: (code: string) => void,
    addToCart: (product: Product) => void,
    deleteProduct: (id: number, size?: string) => void,
    setProductCount: (id: number, count: number, size?: string) => void,
    checkout: () => void,
    confirm: () => void
  }
}

export default BasketModule;

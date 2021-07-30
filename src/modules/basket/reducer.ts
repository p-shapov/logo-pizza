/* locals */
import BasketModule from './namespace';
/* globals */
import {arrayIncludes, objectIncludes} from 'globals/helpers';
/* variables */
import pointsVariable from 'variables/points.variable';
import productsVariable from 'variables/products.variable';
import {ImageSourcePropType} from 'react-native';

const initialState: BasketModule.State = {
  products: [],
  deliveryMethod: 'CURRIER',
  deliveryAddress: {street: '', flat: '', floor: ''},
  pickupPoints: pointsVariable.map((point, index) => ({
    id: point.id,
    checked: index === 0,
    street: point.street,
    workTime: point.workTime,
    metroStation: point.metroStation
  })),
  paymentMethod: 'CASH',
  wishesForOrder: '',
  contactInfo: {name: 'Pavel', phone: '+7 999 999 99 99'},
  orderInfo: {confirmed: false, number: ''},
  addPromoCode: (code) => console.log(code),
  setProductCount: (count, id, variant) => console.log(count, id, variant),
  setDeliveryMethod: (method) => console.log(method),
  setDeliveryAddress: (address) => console.log(address),
  setPickupPoint: (id) => console.log(id),
  setPaymentMethod: (method) => console.log(method),
  setContactInfo: (info) => console.log(info),
  setWishesForOrder: (wishes) => console.log(wishes),
  deleteProduct: (id, variant) => console.log(id, variant),
  addToCart: (count, id, variant) => console.log(count, id, variant),
  checkout: () => console.log('checkout'),
  confirm: () => console.log('confirm')
};

export default (state: BasketModule.State = initialState, action: BasketModule.Actions): BasketModule.State => {
  switch (action.type) {
    case 'ADD_PROMO_CODE':
      return ({...state, discount: action.discount});
    case 'ADD_TO_CART': {
      const identProps = action.variant !== undefined
        ? {id: action.id, variant: action.variant}
        : {id: action.id};

      //TODO: make request
      const foundProduct = productsVariable.find((product) => product.id === action.id) as {
        id: string,
        title: string,
        image: ImageSourcePropType,
        variants: Array<{ id: string, size: { title: string, value: string }, price: number }>
      } | {
        id: string,
        title: string,
        image: ImageSourcePropType,
        price: number
      };

      const variant = 'variants' in foundProduct
        ? foundProduct.variants.find((variant) => variant.id === action.variant)
        : undefined;

      const product = {
        id: foundProduct.id,
        count: action.count,
        title: foundProduct.title,
        image: foundProduct.image,
        price: 'price' in foundProduct ? foundProduct.price : variant !== undefined ? variant.price : 0,
        variant: variant !== undefined ? variant.id : undefined,
        size: variant !== undefined ? variant.size.title + ' ' + variant.size.value : undefined
      } as BasketModule.Product;

      const products = state.products.length > 0
        ? arrayIncludes(state.products, identProps)
          ? state.products.reduce((acc, product) =>
            (objectIncludes(product, identProps))
              ? [...acc, {...product, count: product.count + 1}]
              : [...acc, product], [] as BasketModule.State['products'])
          : [...state.products, product]
        : [product];

      return ({...state, products});
    }
    case 'SET_PRODUCT_COUNT': {
      const identProps = action.variant
        ? {id: action.id, variant: action.variant}
        : {id: action.id};

      return ({
        ...state,
        products: state.products.reduce((acc, product) => objectIncludes(product, identProps)
          ? [...acc, {...product, count: action.count}]
          : [...acc, product], [] as BasketModule.State['products'])
      });
    }
    case 'DELETE_PRODUCT': {
      const identProps = action.variant
        ? {id: action.id, variant: action.variant}
        : {id: action.id};

      return ({...state, products: state.products.filter((product) => !objectIncludes(product, identProps))});
    }
    case 'SET_DELIVERY_ADDRESS': {
      return ({...state, deliveryAddress: action.address});
    }
    case 'SET_DELIVERY_METHOD': {
      return ({...state, deliveryMethod: action.method});
    }
    case 'SET_PICKUP_POINT': {
      return ({...state, pickupPoints: state.pickupPoints.map((point) => ({...point, checked: point.id === action.id}))});
    }
    case 'SET_CONTACT_INFO': {
      return ({...state, contactInfo: action.info});
    }
    case 'SET_WISHES_FOR_ORDER': {
      return ({...state, wishesForOrder: action.wishes});
    }
    case 'SET_PAYMENT_METHOD': {
      return ({...state, paymentMethod: action.method});
    }
    case 'CHECKOUT': {
      const getCheckoutInfo = () => {
        switch (state.deliveryMethod) {
          case 'CURRIER':
            return ({
              deliveryMethod: 'CURRIER',
              address: state.deliveryAddress,
              paymentMethod: state.paymentMethod,
              wishesForOrder: state.wishesForOrder,
              ...state.contactInfo
            });
          case 'PICKUP':
            return ({
              deliveryMethod: 'PICKUP',
              pickupPoint: state.pickupPoints.find((point) => point.checked),
              ...state.contactInfo
            });
        }
      };

      const data = {
        products: state.products,
        discount: state.discount,
        ...getCheckoutInfo()
      };

      // TODO: make request
      console.log(data);
      const orderInfo = {number: 'nsk-546453', confirmed: true};

      return ({...state, products: orderInfo.confirmed ? [] : state.products, orderInfo});
    }
    case 'CONFIRM': {
      const orderInfo = {confirmed: false, number: ''};

      return ({...state, orderInfo});
    }
    default:
      return state;
  }
};
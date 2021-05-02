/* locals */
import BasketModule from './namespace';
/* globals */
import {arrayIncludes, objectIncludes} from 'globals/helpers';
/* variables */
import pointsVariable from 'variables/points.variable';

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
  setProductCount: (id, count) => console.log(id, count),
  setDeliveryMethod: (method) => console.log(method),
  setDeliveryAddress: (address) => console.log(address),
  setPickupPoint: (id) => console.log(id),
  setPaymentMethod: (method) => console.log(method),
  setContactInfo: (info) => console.log(info),
  setWishesForOrder: (wishes) => console.log(wishes),
  deleteProduct: (id) => console.log(id),
  addToCart: (product) => console.log(product),
  checkout: () => console.log('checkout'),
  confirm: () => console.log('confirm')
};

export default (state: BasketModule.State = initialState, action: BasketModule.Actions): BasketModule.State => {
  switch (action.type) {
    case 'ADD_PROMO_CODE':
      return ({...state, discount: action.discount});
    case 'ADD_TO_CART': {
      const identProps = action.product.size
        ? {id: action.product.id, size: action.product.size}
        : {id: action.product.id};

      return ({
        ...state,
        products: (state.products.length > 0)
          ? arrayIncludes(state.products, identProps)
            ? state.products.reduce((acc, product) =>
              (objectIncludes(product, identProps))
                ? [...acc, {...product, count: product.count + 1}]
                : [...acc, product], [] as Array<BasketModule.Product>)
            : [...state.products, action.product]
          : [action.product]
      });
    }
    case 'SET_PRODUCT_COUNT': {
      const identProps = action.size
        ? {id: action.id, size: action.size}
        : {id: action.id};

      return ({
        ...state,
        products: state.products.reduce((acc, product) => objectIncludes(product, identProps)
          ? [...acc, {...product, count: action.count}]
          : [...acc, product], [] as Array<BasketModule.Product>)
      });
    }
    case 'DELETE_PRODUCT': {
      const identProps = action.size
        ? {id: action.id, size: action.size}
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
      return ({
        ...state,
        pickupPoints: state.pickupPoints.map((point) => ({...point, checked: point.id === action.id}))
      });
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
/* locals */
import BasketModule from './namespace';
/* variables */
import promoCodes from 'variables/promocodes.variable';

export const addPromoCode = (code: string): BasketModule.AddPromoCode => {
  //TODO: make request
  const discount = promoCodes.reduce((acc, promo) => promo.code === code
    ? promo.discount : acc, undefined as BasketModule.State['discount']);

  return ({
    type: 'ADD_PROMO_CODE',
    discount
  });
};

export const addToCart = (product: BasketModule.Product): BasketModule.AddToCart => ({
  type: 'ADD_TO_CART',
  product
});

export const setProductCount = (id: number, count: number, size?: string): BasketModule.SetProductCount => ({
  type: 'SET_PRODUCT_COUNT',
  id,
  count,
  size
});

export const deleteProduct = (id: number, size?: string): BasketModule.DeleteProduct => ({
  type: 'DELETE_PRODUCT',
  id,
  size
});

export const setDeliveryMethod = (method: BasketModule.State['deliveryMethod']): BasketModule.SetDeliveryMethod => ({
  type: 'SET_DELIVERY_METHOD',
  method
});

export const setDeliveryAddress = (address: BasketModule.State['deliveryAddress']): BasketModule.SetDeliveryAddress => ({
  type: 'SET_DELIVERY_ADDRESS',
  address
});

export const setPickupPoint = (id: number): BasketModule.SetPickupPoint => ({
  type: 'SET_PICKUP_POINT',
  id
});

export const setPaymentMethod = (method: BasketModule.State['paymentMethod']): BasketModule.SetPaymentMethod => ({
  type: 'SET_PAYMENT_METHOD',
  method
});

export const setWishesForOrder = (wishes: string): BasketModule.SetWishesForOrder => ({
  type: 'SET_WISHES_FOR_ORDER',
  wishes
});

export const setContactInfo = (info: BasketModule.ContactInfo): BasketModule.SetContactInfo => ({
  type: 'SET_CONTACT_INFO',
  info
});

export const checkout = (): BasketModule.Checkout => ({
  type: 'CHECKOUT'
});

export const confirm = (): BasketModule.Confirm => ({
  type: 'CONFIRM'
});
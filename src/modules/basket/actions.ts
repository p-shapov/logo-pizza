/* locals */
import {BasketModule} from './namespace';
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
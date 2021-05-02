/* locals */
import CatalogModule from './namespace';
/* variables */
import productsVariable from 'variables/products.variable';
import promotionsVariable from 'variables/promotions.variable';

export const openPromotion = (actionId: number): CatalogModule.SetPromotion => {
  const promotion = promotionsVariable.find(({id}) => (id === actionId)) as CatalogModule.Promotion;

  return ({type: 'OPEN_PROMOTION', promotion});
};

export const openProduct = (actionId: number): CatalogModule.SetProduct => {
  const product = productsVariable.find(({id}) => (id === actionId)) as CatalogModule.Product;

  return ({type: 'OPEN_PRODUCT', product});
};

export const setProductAddedNotification = (notification: { shown: boolean, description: string }): CatalogModule.SetNotification => ({
  type: 'SET_NOTIFICATION',
  notification
});
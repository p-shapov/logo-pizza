/* locals */
import CatalogModule from './namespace';

export const openPromotion = (id: string): CatalogModule.SetPromotion => ({type: 'OPEN_PROMOTION', id});

export const openProduct = (id: string): CatalogModule.SetProduct => ({type: 'OPEN_PRODUCT', id});

export const setProductAddedNotification = (id: string, variant?: string): CatalogModule.SetProductAddedNotification => ({
  type: 'SET_PRODUCT_ADDED_NOTIFICATION',
  id,
  variant
});
/* locals */
import {CatalogModule} from './namespace';

export const openPromotion = (id: number): CatalogModule.SetPromotion => ({type: 'OPEN_PROMOTION', id});

export const openProduct = (id: number): CatalogModule.SetProduct => ({type: 'OPEN_PRODUCT', id});
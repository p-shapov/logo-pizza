import {CatalogModule} from './namespace';

export const setCategory = (id: number): CatalogModule.ISetCategory => ({type: 'SET_CATEGORY', id});

export const setPromotion = (id: number): CatalogModule.ISetPromotion => ({
  type: 'SET_PROMOTION',
  id
});
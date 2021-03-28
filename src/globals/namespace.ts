import {BasketModule} from '../modules/basket/namespace';
import {CatalogModule} from '../modules/catalog/namespace';

export namespace Root {
  export type Screen = 'CATALOG' | 'CONTACTS' | 'PERSONAL_OFFICE' | 'BASKET' | 'PRODUCT_INFO';
  
  export interface State {
    catalog: CatalogModule.State,
    basket: BasketModule.State
  }
}

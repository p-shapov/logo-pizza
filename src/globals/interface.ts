import {UIModule} from '../modules/UI/namespace';
import {BasketModule} from '../modules/basket/namespace';
import {CatalogModule} from '../modules/catalog/namespace';

export namespace Root {
  export type TMode = 'CATALOG' | 'CONTACTS' | 'PERSONAL_OFFICE' | 'BASKET';
  
  export interface IState {
    ui: UIModule.IState,
    catalog: CatalogModule.IState,
    basket: BasketModule.IState
  }
}

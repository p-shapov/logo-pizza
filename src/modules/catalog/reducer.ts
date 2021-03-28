import {CatalogModule} from './namespace';
/* variables */
import categoriesVariable from '../../variables/categories.variable';
import promotionsVariable from '../../variables/promotions.variable';

const getCategories = (): Array<CatalogModule.Category> => {
  return (
    categoriesVariable.map((category: any): CatalogModule.Category => (category))
  );
};

const getPromotions = () => {
  return (
    promotionsVariable.map((promotion: any): CatalogModule.Promotion => (promotion))
  );
};


const initialState: CatalogModule.State = {
  activeProductId: 0,
  activePromotionId: 0,
  activeCategoryId: 0,
  categories: getCategories(),
  promotions: getPromotions(),
  addToCart: (id) => console.log(id),
  openPromotion: (id) => console.log(id),
  openProduct: (id) => console.log(id)
};

export default (state: CatalogModule.State = initialState, action: CatalogModule.Actions): CatalogModule.State => {
  switch (action.type) {
    case 'OPEN_PRODUCT':
      return ({...state, activeProductId: action.id});
    case 'OPEN_PROMOTION':
      return ({...state, activePromotionId: action.id});
    default:
      return state;
  }
};

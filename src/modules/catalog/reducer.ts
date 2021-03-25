import {CatalogModule} from './namespace';
import categoriesVariable from '../../variables/categories.variable';
import promotionsVariable from '../../variables/promotions.variable';

const getCategories = (): Array<CatalogModule.ICategory> => {
  return (
    categoriesVariable.map((category: any, index: number): CatalogModule.ICategory => ({
      isActive: index === 0,
      ...category
    }))
  );
};

const getPromotions = () => {
  return (
    promotionsVariable.map((promotion: any): CatalogModule.IPromotion => (promotion))
  );
};


const initialState: CatalogModule.IState = {
  activeProductId: 0,
  activePromotionId: 0,
  activeCategoryId: 0,
  categories: getCategories(),
  promotions: getPromotions(),
  setCategory: (id: number) => console.log(id),
  setPromotion: (id: number) => console.log(id),
  setProduct: (id: number) => console.log(id)
};

export default (state: CatalogModule.IState = initialState, action: CatalogModule.TActions): CatalogModule.IState => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return ({...state, activeProductId: action.id});
    case 'SET_CATEGORY':
      return ({...state, activeCategoryId: action.id});
    case 'SET_PROMOTION':
      return ({...state, activePromotionId: action.id});
    default:
      return state;
  }
};

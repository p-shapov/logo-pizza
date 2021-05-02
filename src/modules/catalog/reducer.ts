/* locals */
import CatalogModule from './namespace';
/* variables */
import categoriesVariable from 'variables/categories.variable';
import promotionsVariable from 'variables/promotions.variable';
/* images */
import imageProductPlaceholder from 'images/img_product_placeholder.png';

const getCategories = (): Array<CatalogModule.Category> => {
  return (
    categoriesVariable.map((category: any): CatalogModule.Category => (category))
  );
};

const getPromotions = (): Array<CatalogModule.Promotion> => {
  return (
    promotionsVariable.map((promotion: any): CatalogModule.Promotion => (promotion))
  );
};

const initialState: CatalogModule.State = {
  activeProduct: {
    id: 0,
    title: 'Product\'s title.',
    description: 'Product\'s description.',
    price: 0,
    image: imageProductPlaceholder
  },
  activePromotion: {
    id: 0,
    title: 'Promotion\'s title.',
    description: 'Promotion\'s description.',
    image: imageProductPlaceholder
  },
  notification: {
    shown: false,
    title: 'Добавлено',
    description: ''
  },
  categories: getCategories(),
  promotions: getPromotions(),
  openPromotion: (id) => console.log(id),
  openProduct: (id) => console.log(id),
  setNotification: (notification) => console.log(notification)
};

export default (state: CatalogModule.State = initialState, action: CatalogModule.Actions): CatalogModule.State => {
  switch (action.type) {
    case 'OPEN_PRODUCT':
      return ({...state, activeProduct: action.product});
    case 'OPEN_PROMOTION':
      return ({...state, activePromotion: action.promotion});
    case 'SET_NOTIFICATION':
      return ({...state, notification: {title: 'Добавлено', ...action.notification}});
    default:
      return state;
  }
};

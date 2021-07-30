/* locals */
import CatalogModule from './namespace';
/* variables */
import categoriesVariable from 'variables/categories.variable';
import productsVariable from 'variables/products.variable';
import promotionsVariable from 'variables/promotions.variable';
/* images */
import imageProductPlaceholder from 'images/img_product_placeholder.png';

//TODO: make request
const getCategories = (): Array<CatalogModule.Category> => {
  return (categoriesVariable.map((category: any): CatalogModule.Category => ({
    ...category,
    products: productsVariable.filter((product) => product.category === category.name)
  })));
};
const getPromotions = (): Array<CatalogModule.Promotion> => {
  return (promotionsVariable.map((promotion: any): CatalogModule.Promotion => (promotion)));
};

const initialState: CatalogModule.State = {
  activeProduct: {
    id: '0',
    title: 'Product\'s title.',
    description: 'Product\'s description.',
    price: 0,
    image: imageProductPlaceholder
  },
  activePromotion: {
    id: '0',
    title: 'Promotion\'s title.',
    description: 'Promotion\'s description.',
    image: imageProductPlaceholder
  },
  productAddedNotification: '',
  categories: getCategories(),
  promotions: getPromotions(),
  openPromotion: (promotion) => console.log(promotion),
  openProduct: (product) => console.log(product),
  setProductAddedNotification: (notification) => console.log(notification)
};

export default (state: CatalogModule.State = initialState, action: CatalogModule.Actions): CatalogModule.State => {
  switch (action.type) {
    case 'OPEN_PRODUCT': {
      //TODO: make request
      const activeProduct = productsVariable.find((product) => product.id === action.id) as CatalogModule.Product;

      return ({...state, activeProduct});
    }
    case 'OPEN_PROMOTION': {
      //TODO: make request
      const activePromotion = promotionsVariable.find((promotion) => promotion.id === action.id) as CatalogModule.Promotion;

      return ({...state, activePromotion});
    }
    case 'SET_PRODUCT_ADDED_NOTIFICATION': {
      //TODO: make request
      const product = productsVariable.find((product) => product.id === action.id) as CatalogModule.Product;

      const variant = action.variant && 'variants' in product
        ? product.variants.find((variant) => variant.id === action.variant) as CatalogModule.Variant
        : undefined;

      const productAddedNotification = variant !== undefined ? product.title + ' ' + variant.size.value : product.title;

      return ({...state, productAddedNotification});
    }
    default:
      return state;
  }
};

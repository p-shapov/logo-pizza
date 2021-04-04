/* locals */
import {BasketModule} from './namespace';
/* globals */
import {arrayIncludes, objectIncludes} from 'globals/helpers';

const initialState: BasketModule.State = {
  products: [],
  setProductCount: (id, count) => console.log(id, count),
  deleteProduct: (id) => console.log(id),
  addToCart: (product) => console.log(product)
};

export default (state: BasketModule.State = initialState, action: BasketModule.Actions): BasketModule.State => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const identProps = action.product.size ? {
        id: action.product.id,
        size: action.product.size
      } : {id: action.product.id};
      
      return ({
        ...state,
        products: (state.products.length > 0)
          ? arrayIncludes(state.products, identProps)
            ? state.products.reduce((acc, product) =>
              (objectIncludes(product, identProps))
                ? [...acc, {...product, count: product.count + 1}]
                : [...acc, product], [] as Array<BasketModule.Product>)
            : [...state.products, action.product]
          : [action.product]
      });
    }
    case 'SET_PRODUCT_COUNT': {
      const identProps = action.size ? {id: action.id, size: action.size} : {id: action.id};
      
      return ({
        ...state,
        products: state.products.reduce((acc, product) => objectIncludes(product, identProps)
          ? [...acc, {...product, count: action.count}]
          : [...acc, product], [] as Array<BasketModule.Product>)
      });
    }
    case 'DELETE_PRODUCT': {
      const identProps = action.size ? {id: action.id, size: action.size} : {id: action.id};
      
      return ({...state, products: state.products.filter((product) => !objectIncludes(product, identProps))});
    }
    default:
      return state;
  }
};
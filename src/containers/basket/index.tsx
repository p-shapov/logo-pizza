/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import State from 'globals/interface';
/* components */
import BasketProps from 'components/basket/interface';
import {Basket} from 'components/basket/index';
/* modules */
import {addPromoCode, deleteProduct, setProductCount} from 'modules/basket/actions';

const mapStateToProps = ({basket}: State): BasketProps => ({
  products: basket.products,
  discount: basket.discount,
  addPromoCode: basket.addPromoCode,
  deleteProduct: basket.deleteProduct,
  setProductCount: basket.setProductCount
});

const mapDispatchToProps = (dispatch: Dispatch): {
  addPromoCode: BasketProps['addPromoCode'],
  deleteProduct: BasketProps['deleteProduct'],
  setProductCount: BasketProps['setProductCount']
} => ({
  addPromoCode(code) {
    dispatch(addPromoCode(code));
  },
  deleteProduct(id, variant) {
    dispatch(deleteProduct(id, variant));
  },
  setProductCount(count, id, variant) {
    dispatch(setProductCount(count, id, variant));
  }
});

const BasketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: BasketProps) => (<Basket {...props}/>));

export {BasketContainer};
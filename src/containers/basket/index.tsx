/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {State} from 'globals/interface';
/* components */
import BasketProps from 'components/basket/interface';
import {Basket} from 'components/basket/index';
/* modules */
import {setProductCount, deleteProduct, addPromoCode} from 'modules/basket/actions';

const mapStateToProps = ({basket}: State): BasketProps => ({
  products: basket.products,
  discount: basket.discount,
  addPromoCode: basket.addPromoCode,
  deleteProduct: basket.deleteProduct,
  setProductCount: basket.setProductCount
});

const dispatchStateToProps = (dispatch: Dispatch): {
  addPromoCode: BasketProps['addPromoCode'],
  deleteProduct: BasketProps['deleteProduct'],
  setProductCount: BasketProps['setProductCount']
} => ({
  addPromoCode(code) {
    dispatch(addPromoCode(code))
  },
  deleteProduct(id, size) {
    dispatch(deleteProduct(id, size));
  },
  setProductCount(id, count, size) {
    dispatch(setProductCount(id, count, size));
  }
});

const BasketContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)((props: BasketProps) => (
  <Basket {...props}/>
));

export {BasketContainer};
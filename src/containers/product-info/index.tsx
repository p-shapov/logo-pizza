/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {State} from 'globals/interface';
/* components */
import ProductInfoProps from 'components/product-info/interface';
import {ProductInfo} from 'components/product-info/index';
/* modules */
import {addToCart} from 'modules/basket/actions';

const mapStateToProps = ({catalog, basket}: State): ProductInfoProps => {
  return ({
    ...catalog.activeProduct,
    addToCart: basket.addToCart
  });
};

const dispatchStateToProps = (dispatch: Dispatch): { addToCart: ProductInfoProps['addToCart'] } => ({
  addToCart(product) {
    dispatch(addToCart(product));
  }
});

const ProductInfoContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)((props: ProductInfoProps) => (
  <ProductInfo {...props}/>
));

export {ProductInfoContainer};

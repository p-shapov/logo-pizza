/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import State from 'globals/interface';
/* components */
import ProductInfoProps from 'components/product-info/interface';
import {ProductInfo} from 'components/product-info/index';
/* modules */
import {addToCart} from 'modules/basket/actions';
import {setProductAddedNotification} from 'modules/catalog/actions';

const mapStateToProps = ({catalog, basket}: State): ProductInfoProps => {
  return ({
    ...catalog.activeProduct,
    addToCart: basket.addToCart
  });
};

const mapDispatchToProps = (dispatch: Dispatch): { addToCart: ProductInfoProps['addToCart'] } => ({
  addToCart(product) {
    dispatch(addToCart(product));
    dispatch(setProductAddedNotification({
      description: product.size !== undefined ? product.title + ' ' + product.size.value : product.title,
      shown: true
    }));
    setTimeout(() => dispatch(setProductAddedNotification({description: '', shown: false})), 2500);
  }
});

const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: ProductInfoProps) => (<ProductInfo {...props}/>));

export {ProductInfoContainer};

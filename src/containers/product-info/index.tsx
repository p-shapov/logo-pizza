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
import {setCurrentNotification} from 'modules/ui/actions';

const mapStateToProps = ({catalog, basket}: State): ProductInfoProps => {
  return ({
    id: catalog.activeProduct.id,
    title: catalog.activeProduct.title,
    description: catalog.activeProduct.description,
    image: catalog.activeProduct.image,
    addToCart: basket.addToCart,
    price: 'price' in catalog.activeProduct ? catalog.activeProduct.price : undefined,
    variants: 'variants' in catalog.activeProduct ? catalog.activeProduct.variants : undefined
  });
};

const mapDispatchToProps = (dispatch: Dispatch): { addToCart: ProductInfoProps['addToCart'] } => ({
  addToCart(count, id, variant) {
    dispatch(addToCart(count, id, variant));
    dispatch(setProductAddedNotification(id, variant));
    dispatch(setCurrentNotification('PRODUCT_ADDED'));
  }
});

const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: ProductInfoProps) => (<ProductInfo {...props}/>));

export {ProductInfoContainer};

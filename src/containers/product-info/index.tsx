import React from 'react';
import {connect} from 'react-redux';
/* globals */
import {Root} from '../../globals/namespace';
/* components */
import ProductInfoProps from '../../components/product-info/interface';
import {ProductInfo} from '../../components/product-info';
/* modules */
import {CatalogModule} from '../../modules/catalog/namespace';

const mapStateToProps = (state: Root.State): ProductInfoProps => {
  const {
    categories,
    activeProductId
  } = state.catalog;
  
  const products = categories.reduce((acc, item) =>
    [...acc, ...item.products], [] as Array<CatalogModule.Product>);
  const productInfo = {
    ...products.find((item) => item.id === activeProductId),
    addToCart: state.basket.addToCart
  };
  
  return (productInfo as ProductInfoProps);
};

const ProductInfoContainer = connect(
  mapStateToProps
)((props: ProductInfoProps) => (
  <ProductInfo {...props}/>
));

export {ProductInfoContainer};

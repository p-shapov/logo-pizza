/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import State from 'globals/interface';
/* components */
import {CatalogMediator} from 'components/catalog-mediator/index';
import CatalogMediatorProps from 'components/catalog-mediator/interface';
/* modules */
import {openProduct, openPromotion} from 'modules/catalog/actions';

const mapStateToProps = ({catalog}: State): CatalogMediatorProps => ({
  ...catalog,
  categories: catalog.categories.map(category => ({
    name: category.name,
    title: category.title,
    Icon: category.Icon,
    products: category.products.map((product) => ({
      ...product,
      price: Array.isArray(product.price) ? product.price[0].value : product.price,
      multiplePrice: Array.isArray(product.price)
    }))
  }))
});

const mapDispatchToProps = (dispatch: Dispatch): {
  openProduct: CatalogMediatorProps['openProduct'],
  openPromotion: CatalogMediatorProps['openPromotion']
} => ({
  openProduct(id) {
    dispatch(openProduct(id));
  },
  openPromotion(id) {
    dispatch(openPromotion(id));
  }
});

const CatalogMediatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: CatalogMediatorProps) => (<CatalogMediator {...props}/>));

export {CatalogMediatorContainer};
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/namespace';
/* components */
import {CatalogMediator} from '../../components/catalog-mediator';
import CatalogMediatorProps from '../../components/catalog-mediator/interface';
/* modules */
import {openProduct, openPromotion} from '../../modules/catalog/actions';


const mapStateToProps = (state: Root.State): CatalogMediatorProps => ({
  ...state.catalog,
  categories: state.catalog.categories.map(category => ({
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

const dispatchStateToProps = (dispatch: Dispatch): {
  openProduct: CatalogMediatorProps['openProduct'],
  openPromotion: CatalogMediatorProps['openPromotion']
} => ({
  openProduct(id) {
    dispatch(openProduct(id))
  },
  openPromotion(id) {
    dispatch(openPromotion(id))
  }
})

const CatalogMediatorContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)((props: CatalogMediatorProps) => (
  <CatalogMediator {...props}/>
));

export {CatalogMediatorContainer};
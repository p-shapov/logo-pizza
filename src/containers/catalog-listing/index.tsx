import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* components */
import NCatalogListing from '../../components/catalog-listing/namespace';
import {CatalogListing} from '../../components/catalog-listing';
/* modules */
import {setCategory, setProduct} from '../../modules/catalog/actions';

const mapStateToProps = (state: Root.IState): NCatalogListing.IListing => ({
  items: state.catalog.categories.map(category => ({
    title: category.title,
    Icon: category.Icon,
    items: category.products.map(product => ({
      id: product.id,
      title: product.title,
      description: product.description,
      price: Array.isArray(product.price) ? product.price[0].value : product.price,
      multiplePrice: Array.isArray(product.price),
      image: product.image
    }))
  })),
  openProduct: state.catalog.setProduct,
  setCategory: state.catalog.setCategory,
  activeCategoryId: state.catalog.activeCategoryId
});

const mapDispatchToProps = (dispatch: Dispatch): { openProduct: NCatalogListing.IListing['openProduct'], setCategory: NCatalogListing.IListing['setCategory'] } => ({
  openProduct(id: number) {
    dispatch(setProduct(id));
  },
  setCategory(id: number) {
    dispatch(setCategory(id));
  }
});

const CatalogListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: NCatalogListing.IListing) => (
  <CatalogListing {...props} />
));

export {CatalogListingContainer};
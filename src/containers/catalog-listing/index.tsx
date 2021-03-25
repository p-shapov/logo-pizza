import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* components */
import NCatalogListing from '../../components/catalog-listing/namespace';
import {CatalogListing} from '../../components/catalog-listing';
/* modules */
import {setCategory, setProduct, setPromotion} from '../../modules/catalog/actions';

const mapStateToProps = (state: Root.IState): NCatalogListing.IListing => ({
  categories: state.catalog.categories.map(category => ({
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
  promotions: state.catalog.promotions.map(promotion => ({title: promotion.title, image: promotion.image})),
  openProduct: state.catalog.setProduct,
  openPromotion: state.catalog.setPromotion,
  setCategory: state.catalog.setCategory,
  activeCategoryId: state.catalog.activeCategoryId,
  activePromotionId: state.catalog.activePromotionId
});

const mapDispatchToProps = (dispatch: Dispatch): {
  openProduct: NCatalogListing.IListing['openProduct'],
  openPromotion: NCatalogListing.IListing['openPromotion'],
  setCategory: NCatalogListing.IListing['setCategory']
} => ({
  openProduct(id) {
    dispatch(setProduct(id));
  },
  openPromotion(id) {
    dispatch(setPromotion(id))
  },
  setCategory(id) {
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
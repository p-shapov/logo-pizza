import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* modules */
import {setPromotion} from '../../modules/catalog/actions';
/* components */
import NPromotionListing from '../../components/promotion-listing/namespace';
import {PromotionListing} from '../../components/promotion-listing';

const mapStateToProps = (state: Root.IState): NPromotionListing.IListing => ({
  items: state.catalog.promotions.map(promotion => ({title: promotion.title, image: promotion.image})),
  openPromotion: state.catalog.setPromotion,
  activePromotionId: state.catalog.activePromotionId
});

const mapDispatchToProps = (dispatch: Dispatch): { openPromotion: NPromotionListing.IListing['openPromotion'] } => ({
  openPromotion(id: number) {
    dispatch(setPromotion(id));
  }
});

const PromotionListingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: NPromotionListing.IListing) => {
  return (
    <PromotionListing {...props} />
  );
});

export {PromotionListingContainer};
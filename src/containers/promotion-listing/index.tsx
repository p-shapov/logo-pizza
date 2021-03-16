import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* modules */
import {setPromotion} from '../../modules/catalog/actions';
/* components */
import {PromotionListingComponent} from '../../components/promotion-listing/namespace';
import PromotionListing from '../../components/promotion-listing';

const mapStateToProps = (state: Root.IState): PromotionListingComponent.IPromotionListing => ({
  items: state.catalog.promotions.map(promotion => ({title: promotion.title, image: promotion.image})),
  openPromotion: state.catalog.setPromotion,
  activePromotionId: state.catalog.activePromotionId
});

const mapDispatchToProps = (dispatch: Dispatch): {openPromotion: PromotionListingComponent.IPromotionListing['openPromotion']} => ({
  openPromotion(id: number) {
    dispatch(setPromotion(id))
  }
})

const PromotionListingContainer = (props: PromotionListingComponent.IPromotionListing) => {
  return (
    <PromotionListing {...props} />
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromotionListingContainer);
/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
/* globals */
import {State} from 'globals/interface';
/* components */
import TabMediatorProps from 'components/tab-mediator/interface';
import {TabMediator} from 'components/tab-mediator/index';

const mapStateToProps = (state: State): { productInCartCount: TabMediatorProps['productInCartCount'] } => ({
  productInCartCount: state.basket.productsInCartCount
});

const TabMediatorContainer = connect(
  mapStateToProps
)((props: TabMediatorProps) => (
  <TabMediator {...props}/>
));

export {TabMediatorContainer};
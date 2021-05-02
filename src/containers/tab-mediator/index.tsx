/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
/* globals */
import State from 'globals/interface';
/* components */
import TabMediatorProps from 'components/tab-mediator/interface';
import {TabMediator} from 'components/tab-mediator/index';

const mapStateToProps = ({basket}: State): { productInCartCount: TabMediatorProps['productInCartCount'] } => ({
  productInCartCount: basket.products.reduce((count, product) => count + product.count, 0)
});

const TabMediatorContainer = connect(
  mapStateToProps
)((props: TabMediatorProps) => (<TabMediator {...props}/>));

export {TabMediatorContainer};
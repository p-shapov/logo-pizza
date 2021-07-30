/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import State from 'globals/interface';
/* components */
import PromotionProps from 'components/promotion/interface';
import {Promotion} from 'components/promotion/index';
/* modules */
import {setCurrentModal} from 'modules/ui/actions';

const mapStateToProps = ({catalog}: State): PromotionProps => ({
  title: catalog.activePromotion.title,
  description: catalog.activePromotion.description,
  image: catalog.activePromotion.image,
  close: () => {}
});

const mapDispatchToProps = (dispatch: Dispatch): { close: PromotionProps['close'] } => ({
  close() {
    dispatch(setCurrentModal(null));
  }
});

const PromotionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: PromotionProps) => (<Promotion {...props}/>));

export {PromotionContainer};
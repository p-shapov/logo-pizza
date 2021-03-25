import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* modules */
import {setMode} from '../../modules/UI/actions';
/* components */
import {Footer} from '../../components/footer';
import NFooter from '../../components/footer/namespace';

const mapStateToProps = (state: Root.IState): NFooter.IFooter => ({
  mode: state.ui.mode,
  setMode: state.ui.setMode,
  productsInCartCount: state.basket.productsInCartCount
});

const mapDispatchToProps = (dispatch: Dispatch): { setMode: NFooter.IFooter['setMode'] } => ({
  setMode(mode: Root.TMode) {
    dispatch(setMode(mode));
  }
});

const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: NFooter.IFooter) => (
  <Footer {...props}/>
));

export {FooterContainer};
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {Root} from '../../globals/interface';
/* modules */
import {setMode} from '../../modules/UI/actions';
/* components */
import Footer from '../../components/footer';
import {FooterComponent} from '../../components/footer/namespace';

const mapStateToProps = (state: Root.IState): FooterComponent.IFooter => ({
  mode: state.ui.mode,
  setMode: state.ui.setMode,
  productsInCartCount: state.basket.productsInCartCount
});

const mapDispatchToProps = (dispatch: Dispatch): { setMode: FooterComponent.IFooter['setMode'] } => ({
  setMode(mode: Root.TMode) {
    dispatch(setMode(mode));
  }
});

const FooterContainer = (props: FooterComponent.IFooter) => (
  <Footer {...props}/>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer);
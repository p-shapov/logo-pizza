import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import {IRootState} from '../../globals/types';
import {TMode} from '../../modules/UI/types';
import {setMode} from '../../modules/UI/actions';
/* components */
import FooterComponent from '../../components/footerComponent';
import {IFooterComponent} from '../../components/footerComponent/interface';

const mapStateToProps = (state: IRootState): IFooterComponent => ({
  mode: state.ui.mode,
  setMode: state.ui.setMode,
  productsInCartCount: state.basket.productsInCartCount
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<IFooterComponent> => ({
  setMode(mode: TMode) {
    dispatch(setMode(mode));
  }
});

const FooterContainer = (props: IFooterComponent): JSX.Element => (
  <FooterComponent {...props}/>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer);
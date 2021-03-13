import React from 'react';
import {connect, RootStateOrAny} from 'react-redux';
import {Dispatch} from 'redux';
import {COLORS} from '../../constants';
import Color from 'color';
import {IFooterContainer} from './interface';
import FooterComponent from '../../components/footerComponent';
import {TMode} from '../../types';
import {setMode} from '../../actions';

const mapStateToProps = (state: RootStateOrAny) => ({
  mode: state.mode,
  productsInCartCount : state.productsInCartCount,
  setMode: state.setMode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMode(mode: TMode) {
    dispatch(setMode(mode));
  }
});

const FooterContainer = (props: IFooterContainer) => (
  <FooterComponent
    {...props}
    navButtonBackgroundColor={Color().hex(COLORS.NAV_BUTTON_BACKGROUND)}
    navButtonBackgroundColorActive={Color().hex(COLORS.NAV_BUTTON_BACKGROUND_ACTIVE)}
    navButtonForegroundColor={Color().hex(COLORS.NAV_BUTTON_FOREGROUND)}
    navButtonForegroundColorActive={Color().hex(COLORS.NAV_BUTTON_FOREGROUND_ACTIVE)}
  />
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer);
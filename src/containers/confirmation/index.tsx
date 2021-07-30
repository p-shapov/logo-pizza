/* libraries and plugins */
import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
/* globals */
import State from 'globals/interface';
/* components */
import ConfirmationProps from 'components/confirmation/interface';
import {Confirmation} from 'components/confirmation/index';
/* modules */
import {confirm} from 'modules/basket/actions';
import {setCurrentModal} from 'modules/ui/actions';

const mapStateToProps = ({basket}: State): ConfirmationProps => ({
  orderInfo: basket.orderInfo,
  confirm: basket.confirm
});

const mapDispatchToProps = (dispatch: Dispatch): { confirm: ConfirmationProps['confirm'] } => ({
  confirm() {
    dispatch(confirm());
    dispatch(setCurrentModal(null));
  }
});

const ConfirmationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: ConfirmationProps) => (<Confirmation {...props}/>));

export {ConfirmationContainer};
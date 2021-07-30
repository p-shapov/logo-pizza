/* libraries and plugins */
import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
/* globals */
import State from 'globals/interface';
/* components */
import PaymentProps from 'components/payment/interface';
import {Payment} from 'components/payment/index';
/* modules */
import {checkout, setContactInfo, setPaymentMethod, setWishesForOrder} from 'modules/basket/actions';
import {setCurrentModal} from 'modules/ui/actions';

const mapStateToProps = ({basket}: State): PaymentProps => ({
  deliveryMethod: basket.deliveryMethod,
  paymentMethod: basket.paymentMethod,
  wishesForOrder: basket.wishesForOrder,
  contactInfo: basket.contactInfo,
  setWishesForOrder: basket.setWishesForOrder,
  setContactInfo: basket.setContactInfo,
  setPaymentMethod: basket.setPaymentMethod,
  checkout: basket.checkout
});

const mapDispatchToProps = (dispatch: Dispatch): {
  setWishesForOrder: PaymentProps['setWishesForOrder'],
  setContactInfo: PaymentProps['setContactInfo'],
  setPaymentMethod: PaymentProps['setPaymentMethod'],
  checkout: PaymentProps['checkout']
} => ({
  setWishesForOrder(wishes) {
    dispatch(setWishesForOrder(wishes));
  },
  setContactInfo(info) {
    dispatch(setContactInfo(info));
  },
  setPaymentMethod(method) {
    dispatch(setPaymentMethod(method));
  },
  checkout() {
    dispatch(checkout());
    dispatch(setCurrentModal('CONFIRMATION'));
  }
});

const PaymentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: PaymentProps) => (<Payment {...props}/>));

export {PaymentContainer};
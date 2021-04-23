/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* components */
import DeliveryProps from 'components/delivery/interface';
import {Delivery} from 'components/delivery/index.android';
/* globals */
import {State} from 'globals/interface';
import {setDeliveryAddress, setDeliveryMethod, setPickupPoint} from 'modules/basket/actions';

const mapStateToProps = (state: State): DeliveryProps => ({
  method: state.basket.deliveryMethod,
  address: state.basket.deliveryAddress,
  pickupPoints: state.basket.pickupPoints.map((point) => ({
    id: point.id,
    checked: point.checked,
    data: {
      street: point.street,
      workTime: point.workTime,
      metroStation: point.metroStation
    }
  })),
  setPoint: state.basket.setPoint,
  setMethod: state.basket.setMethod,
  setAddress: state.basket.setAddress
});

const dispatchStateToProps = (dispatch: Dispatch): {
  setMethod: DeliveryProps['setMethod'],
  setAddress: DeliveryProps['setAddress'],
  setPoint: DeliveryProps['setPoint']
} => ({
  setMethod(method) {
    dispatch(setDeliveryMethod(method));
  },
  setAddress(address) {
    dispatch(setDeliveryAddress(address));
  },
  setPoint(id) {
    dispatch(setPickupPoint(id));
  }
});

const DeliveryContainer = connect(
  mapStateToProps,
  dispatchStateToProps
)((props: DeliveryProps) => (
  <Delivery {...props}/>
));

export {DeliveryContainer};
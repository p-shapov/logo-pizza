/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
/* globals */
import State from 'globals/interface';
/* components */
import NotificationProps from 'components/notification/interface';
import {Notification} from 'components/notification/index';
/* modules */
import {setCurrentNotification} from 'modules/ui/actions';

const mapStateToProps = ({catalog}: State): {
  description: NotificationProps['description'],
  close: NotificationProps['close']
} => ({
  description: catalog.productAddedNotification,
  close: () => {}
});

const mapDispatchToProps = (dispatch: Dispatch): { close: NotificationProps['close'] } => ({
  close() {
    dispatch(setCurrentNotification(null));
  }
});

const ProductAddedNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: {
  description: NotificationProps['description'],
  close: NotificationProps['close']
}) => (<Notification title={'Добавлено'} {...props}/>));

export {ProductAddedNotificationContainer};
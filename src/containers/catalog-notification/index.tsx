/* libraries and plugins */
import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
/* globals */
import State from 'globals/interface';
/* components */
import NotificationProps from 'components/notification/interface';
import {Notification} from 'components/notification/index';
/* modules */
import {setProductAddedNotification} from 'modules/catalog/actions';

const mapStateToProps = ({catalog}: State): NotificationProps => ({
  ...catalog.notification,
  close: () => {}
});

const mapDispatchToProps = (dispatch: Dispatch): { close: NotificationProps['close'] } => ({
  close() {
    dispatch(setProductAddedNotification({description: '', shown: false}));
  }
});

const CatalogNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)((props: NotificationProps) => (<Notification {...props}/>));

export {CatalogNotificationContainer};
/* libraries and plugins */
import React from 'react';
import {connect} from 'react-redux';
/* components */
import {NotificationMediator} from 'components/notification-mediator/index';
import NotificationMediatorProps from 'components/notification-mediator/interface';
/* globals */
import State from 'globals/interface';

const mapStateToProps = ({ui}: State): { current: NotificationMediatorProps['current'] } => ({current: ui.currentNotification});

const NotificationMediatorContainer = connect(
  mapStateToProps
)((props: NotificationMediatorProps) => (<NotificationMediator {...props}/>));

export {NotificationMediatorContainer};
/* libraries and plugins */
import {FunctionComponent} from 'react';

interface NotificationMediatorProps {
  current: NotificationNames,
  notifications: Array<{ name: NotificationNames, Container: FunctionComponent }>
}

export default NotificationMediatorProps;
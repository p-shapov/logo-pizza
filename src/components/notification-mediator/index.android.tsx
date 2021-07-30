/* libraries and plugins */
import React from 'react';
import {View} from 'react-native';
/* locals */
import NotificationMediatorProps from './interface';
import styles from './styles';

const NotificationMediator = ({current, notifications}: NotificationMediatorProps) => {
  return (current !== null ? (<View style={styles.notificationMediator}>
    {notifications.map(({name, Container}, index) => name === current
      ? (<Container key={index}/>) : <React.Fragment key={index}/>)}
  </View>) : <></>);
};

export {NotificationMediator};
/* libraries and plugins */
import React from 'react';
import {Text, View} from 'react-native';
/* locals */
import NotificationProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* shared */
import {Button} from 'shared/button/index';
/* icons */
import IcoCross from 'images/ico_cross.svg';

const Notification = ({title, description, close}: NotificationProps) => {
  return (<View style={styles.notification}>
    <View style={styles.notificationOpenBasket}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
    <Button view={'FILLED'} type={'SECONDARY'} onPress={close}>
      <IcoCross color={COLORS.FOREGROUND_SECONDARY}/>
    </Button>
  </View>);
};

export {Notification};
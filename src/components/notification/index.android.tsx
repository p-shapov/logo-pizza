/* libraries and plugins */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* locals */
import NotificationProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* shared */
import {Button} from 'shared/button/index';
/* icons */
import IcoCross from 'images/ico_cross.svg';

const Notification = ({shown, title, description, close}: NotificationProps) => {
  const navigation = useNavigation();

  const goToBasket = () => navigation.navigate('ROOT', {screen: 'BASKET', params: {screen: 'MAIN'}});

  const goToBasketAndClose = () => {
    goToBasket();
    close();
  };

  return (shown ? (<View style={styles.notification}>
    <Pressable style={styles.notificationOpenBasket} onPress={goToBasketAndClose}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </Pressable>
    <Button view={'FILLED'} type={'SECONDARY'} onPress={close}>
      <IcoCross color={COLORS.FOREGROUND_SECONDARY}/>
    </Button>
  </View>) : (<></>));
};

export {Notification};
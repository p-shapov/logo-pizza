/* libraries and plugins */
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackHandler, Image, NativeEventSubscription, Pressable, Text, View} from 'react-native';
/* locals */
import styles from './styles';
import ConfirmationProps from './interface';
/* shared */
import {Button} from 'shared/button/index';
/* images */
import ImgProductPlaceholder from 'images/img_product_placeholder.png';

const Confirmation = ({orderInfo, confirm}: ConfirmationProps) => {
  const navigation = useNavigation();

  const resetStack = () => navigation.reset({index: 0, routes: [{name: 'ROOT'}]});

  const confirmAndGoToCatalog = () => {
    resetStack();
    confirm();
  };

  const handleBackPress = () => {
    confirmAndGoToCatalog();

    return true;
  };

  const orderConfirmed = () => (<>
    <Image style={styles.confirmationImage} source={ImgProductPlaceholder}/>
    <Text style={styles.confirmationTitle}>Спасибо за заказ!</Text>
    <Text style={styles.confirmationOrderNumber}>Номер заказа: {orderInfo.number}</Text>
    <Text style={styles.confirmationDescription}>Наш менеджер свяжется с Вами в ближайшее время для уточнения полученной
      информации.</Text>
    <View style={styles.confirmationGoToMenu}>
      <Button view={'FILLED'} type={'PRIMARY'} onPress={confirmAndGoToCatalog}>Вернуться в меню</Button>
    </View>
  </>);

  const listeners: Array<NativeEventSubscription> = [
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)
  ];

  const unsubscribe = () => listeners.forEach((listener) => listener.remove());

  useEffect(() => unsubscribe);

  return (<>
    {orderInfo.confirmed && (<View style={styles.confirmation}>
      <View style={styles.confirmationWindow}>
        {orderConfirmed()}
      </View>
      <Pressable style={styles.confirmationOuterClickArea} onPress={confirmAndGoToCatalog}/>
    </View>)}
  </>);
};

export {Confirmation};
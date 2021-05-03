/* libraries and plugins */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View, Pressable} from 'react-native';
/* locals */
import styles from './styles';
import ConfirmationProps from './interface';
/* shared */
import {Button} from 'shared/button/index';
/* images */
import ImgProductPlaceholder from 'images/img_product_placeholder.png';

const Confirmation = ({orderInfo, confirm}: ConfirmationProps) => {
  const navigation = useNavigation();

  const resetStack = () => navigation.reset({index: 0, routes: [{name: 'CATALOG'}]});

  const goToCatalog = () => navigation.navigate('ROOT', {screen: 'CATALOG', params: {screen: 'MAIN'}});

  const confirmAndGoToCatalog = () => {
    resetStack();
    goToCatalog();
    confirm();
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
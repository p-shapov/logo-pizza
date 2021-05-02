/* libraries and plugins */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Dash from 'react-native-dash';
/* locals */
import CheckoutStepsProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* icons */
import IcoArrowBack from 'images/ico_arrow_back.svg';

const CheckoutSteps = ({active, children}: CheckoutStepsProps) => {
  const navigation = useNavigation();

  const goToBasket = () => navigation.navigate('ROOT', {screen: 'BASKET', params: {screen: 'MAIN'}});

  const goToDelivery = () => navigation.navigate('ROOT', {screen: 'BASKET', params: {screen: 'MAIN'}});

  const handleGoBack = () => {
    switch (active) {
      case 'DELIVERY': {
        return goToBasket();
      }
      case 'PAYMENT': {
        return goToDelivery();
      }
    }
  };

  return (<View style={styles.checkoutSteps}>
    <View style={styles.checkoutStepsHeading}>
      <Pressable style={styles.checkoutStepsGoBack} onPress={handleGoBack}>
        <IcoArrowBack color={COLORS.FOREGROUND_PRIMARY}/>
      </Pressable>
      <View style={styles.checkoutStepsIndicators}>
        <View style={active === 'DELIVERY' ? styles.checkoutStepsIndicatorActive : styles.checkoutStepsIndicator}>
          <Text style={styles.checkoutStepsIndicatorNumber}>1</Text>
          <View style={styles.checkoutStepsIndicatorTitleWrapper}>
            <Text style={styles.checkoutStepsIndicatorTitle}>Доставка</Text>
          </View>
        </View>
        <Dash
          style={styles.checkoutStepsIndicatorGap}
          dashLength={2}
          dashGap={4}
          dashThickness={1}
          dashColor={COLORS.DELIMITER}
        />
        <View style={active === 'PAYMENT' ? styles.checkoutStepsIndicatorActive : styles.checkoutStepsIndicator}>
          <Text style={styles.checkoutStepsIndicatorNumber}>2</Text>
          <View style={styles.checkoutStepsIndicatorTitleWrapper}>
            <Text style={styles.checkoutStepsIndicatorTitle}>Оплата</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.checkoutStepsDelimiter}/>
    {children}
  </View>);
};

export {CheckoutSteps};
/* libraries and plugins */
import React, {useState} from 'react';
import {BackHandler, Keyboard, NativeEventSubscription, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* locals */
import PaymentProps from './interface';
import styles from './styles';
/* shared */
import {Radio} from 'shared/radio/index';
import {TextField} from 'shared/text-field/index';
import {Checkbox} from 'shared/checkbox/index';
import {Button} from 'shared/button/index';
/* components */
import {CheckoutSteps} from 'components/checkout-steps/index';

const Payment = (props: PaymentProps) => {
  const {deliveryMethod, paymentMethod, contactInfo, wishesForOrder, setPaymentMethod, setContactInfo, setWishesForOrder, checkout} = props;

  const [privacyRulesAgreement, setPrivacyRulesAgreement] = useState<boolean>(false);
  const [keyboardShown, setKeyboardShown] = useState<boolean>(false);

  const navigation = useNavigation();

  const setCashMethod = () => setPaymentMethod('CASH');

  const setCardMethod = () => setPaymentMethod('CARD');

  const setContactName = (name: string) => setContactInfo({...contactInfo, name});

  const setContactPhone = (phone: string) => setContactInfo({...contactInfo, phone});

  const togglePrivacy = () => setPrivacyRulesAgreement(!privacyRulesAgreement);

  const goToDelivery = () => navigation.navigate('BASKET', {screen: 'DELIVERY'});

  const handleBackPress = () => {
    goToDelivery();

    return true;
  };

  const listeners: Array<NativeEventSubscription> = [
    Keyboard.addListener('keyboardDidShow', () => setKeyboardShown(true)),
    Keyboard.addListener('keyboardDidHide', () => setKeyboardShown(false)),
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)
  ];

  const unsubscribe = () => listeners.forEach((listener) => listener.remove());

  const checkoutAndUnsubscribe = () => {
    checkout();
    unsubscribe();
  };

  const currierBlock = () => (<>
    <View style={styles.paymentMethod}>
      <Radio checked={paymentMethod === 'CASH'} onPress={setCashMethod}>
        <Text>Наличными</Text>
      </Radio>
    </View>
    <View style={styles.paymentMethod}>
      <Radio checked={paymentMethod === 'CARD'} onPress={setCardMethod}>
        <Text>Картой курьеру</Text>
      </Radio>
    </View>
    <View style={styles.paymentWishesForOrder}>
      <TextField
        type={'MULTILINE'}
        value={wishesForOrder}
        label={'Ваши пожелания к заказу'}
        onChange={setWishesForOrder}
      />
    </View>
  </>);

  return (<CheckoutSteps active={'PAYMENT'}>
    <View style={keyboardShown ? styles.paymentShrink : styles.payment}>
      <ScrollView contentContainerStyle={styles.paymentScrollView}>
        {deliveryMethod === 'CURRIER' && currierBlock()}
        <View style={styles.paymentName}>
          <TextField
            type={'TEXT'}
            value={contactInfo.name}
            label={'Имя'}
            onChange={setContactName}
          />
        </View>
        <View style={styles.paymentPhone}>
          <TextField
            type={'PHONE'}
            value={contactInfo.phone}
            label={'Номер телефона'}
            onChange={setContactPhone}
          />
        </View>
        <Checkbox checked={privacyRulesAgreement} onPress={togglePrivacy}>
          <Text style={styles.paymentPrivacyRules}>Я даю согласие на
            <Text style={styles.paymentPrivacyRulesLink}> обработку персональных данных</Text>
          </Text>
        </Checkbox>
      </ScrollView>
      <View style={styles.paymentConfirm}>
        <Button view={'FILLED'} type={'PRIMARY'} disabled={!privacyRulesAgreement} onPress={checkoutAndUnsubscribe}>
          Заказать
        </Button>
      </View>
    </View>
  </CheckoutSteps>);
};

export {Payment};
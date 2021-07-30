/* libraries and plugins */
import React, {useEffect, useState} from 'react';
import {BackHandler, Keyboard, NativeEventSubscription, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* locals */
import DeliveryProps from './interface';
import styles from './styles';
/* shared */
import {Button} from 'shared/button/index';
import {TextField} from 'shared/text-field/index';
import {PointInfo} from 'shared/point-info/index';
import {Radio} from 'shared/radio/index';
/* components */
import {CheckoutSteps} from 'components/checkout-steps/index';

const Delivery = (props: DeliveryProps) => {
  const {method, address, pickupPoints, setAddress, setPoint, setMethod} = props;

  const [keyboardShown, setKeyboardShown] = useState<boolean>(false);

  const navigation = useNavigation();

  const confirmDisabled = method === 'CURRIER' && (address.street === '' || address.flat === '' || address.floor === '');

  const setStreet = (street: string) => setAddress({...address, street});

  const setFlat = (flat: string) => setAddress({...address, flat});

  const setFloor = (floor: string) => setAddress({...address, floor});

  const goToBasket = () => navigation.navigate('BASKET', {screen: 'ROOT'});

  const goToPaymentMethods = () => navigation.navigate('BASKET', {screen: 'PAYMENT'});

  const handleBackPress = () => {
    goToBasket();

    return true;
  };

  const validate = () => {
    if (method === 'CURRIER') {
      if (address.street === '') {
        return false;
      }

      if (address.flat === '') {
        return false;
      }

      if (address.floor === '') {
        return false;
      }
    }

    return true;
  };

  const validateAndGoToPaymentMethods = () => {
    if (validate()) {
      goToPaymentMethods();
    }
  };

  const listeners: Array<NativeEventSubscription> = [
    Keyboard.addListener('keyboardDidShow', () => setKeyboardShown(true)),
    Keyboard.addListener('keyboardDidHide', () => setKeyboardShown(false)),
    BackHandler.addEventListener('hardwareBackPress', handleBackPress)
  ];

  const unsubscribe = () => listeners.forEach((listener) => listener.remove());

  useEffect(() => unsubscribe);

  const currierMethod = () => (<>
    <View style={styles.deliveryStreet}>
      <TextField
        type={'TEXT'}
        value={address.street}
        label={'Улица'}
        onChange={setStreet}
      />
    </View>
    <View style={styles.deliveryHouse}>
      <View style={styles.deliveryFlat}>
        <TextField
          type={'TEXT'}
          value={address.flat}
          label={'Квартира/Офис'}
          placeholder={''}
          editable={address.street !== ''}
          disabled={address.street === ''}
          onChange={setFlat}
        />
      </View>
      <View style={styles.deliveryGap}/>
      <View style={styles.deliveryFloor}>
        <TextField
          type={'TEXT'}
          value={address.floor.toString()}
          label={'Этаж'}
          editable={address.street !== '' && address.flat !== ''}
          disabled={address.street === '' || address.flat === ''}
          onChange={setFloor}
        />
      </View>
    </View>
  </>);

  const pickupMethod = () => (<>
    <View style={styles.deliveryDelimiter}/>
    {pickupPoints.map((point, index) => (<React.Fragment key={index}>
      <View style={styles.deliveryPoint}>
        <Radio checked={point.checked} onPress={() => setPoint(point.id)}>
          <PointInfo {...point.data}/>
        </Radio>
      </View>
      <View style={styles.deliveryDelimiter}/>
    </React.Fragment>))}
  </>);

  return (<CheckoutSteps active={'DELIVERY'}>
    <View style={keyboardShown ? styles.deliveryShrink : styles.delivery}>
      <ScrollView contentContainerStyle={styles.deliveryScrollView}>
        <View style={styles.deliveryMethods}>
          <View style={styles.deliveryMethodsButton}>
            <Button
              view={method === 'CURRIER' ? 'FILLED' : 'SHAPED'}
              type={method === 'CURRIER' ? 'PRIMARY' : 'SECONDARY'}
              onPress={() => setMethod('CURRIER')}
            >Доставка</Button>
          </View>
          <View style={styles.deliveryGap}/>
          <View style={styles.deliveryMethodsButton}>
            <Button
              view={method === 'PICKUP' ? 'FILLED' : 'SHAPED'}
              type={method === 'PICKUP' ? 'PRIMARY' : 'SECONDARY'}
              onPress={() => setMethod('PICKUP')}
            >Самовывоз</Button>
          </View>
        </View>
        {method === 'CURRIER' ? currierMethod() : pickupMethod()}
      </ScrollView>
      <View style={styles.deliveryConfirm}>
        <Button view={'FILLED'} type={'PRIMARY'} disabled={confirmDisabled} onPress={validateAndGoToPaymentMethods}>
          {method === 'CURRIER' ? 'Подтвердить адресс' : 'Выбрать'}
        </Button>
      </View>
    </View>
  </CheckoutSteps>);
};

export {Delivery};
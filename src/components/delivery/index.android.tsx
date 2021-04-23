/* libraries and plugins */
import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
/* locals */
import DeliveryProps from './interface';
import styles from './styles';
/* shared */
import {Button} from 'shared/button/index';
import {TextField} from 'shared/text-field/index';
import {PointInfo} from 'shared/point-info/index';
import {Radio} from 'shared/radio/index.android';
/* components */
import {CheckoutSteps} from 'components/checkout-steps/index.android';

const Delivery = (props: DeliveryProps) => {
  const {method, address, pickupPoints, setAddress, setPoint, setMethod} = props;
  
  const [keyboardShown, setKeyboardShown] = useState<boolean>(false);
  
  const navigation = useNavigation();
  
  const goToPaymentMethods = () => {
    switch (method) {
      case 'CURRIER': {
        if (address.street === '') {
          return;
        }
        
        if (address.flat === '') {
          return;
        }
        
        if (address.floor === '') {
          return;
        }
        
        return navigation.navigate('BASKET', {screen: 'PAYMENT'});
      }
      case 'PICKUP': {
        return navigation.navigate('BASKET', {screen: 'PAYMENT'});
      }
    }
  };
  
  Keyboard.addListener('keyboardDidShow', () => setKeyboardShown(true));
  Keyboard.addListener('keyboardDidHide', () => setKeyboardShown(false));
  
  navigation.addListener('beforeRemove', () => navigation.navigate('BASKET', {screen: 'MAIN'}));
  
  const currierMethod = () => (<>
    <View style={styles.deliveryStreet}>
      <TextField
        type={'TEXT'}
        value={address.street}
        label={'Улица'}
        onChange={(street) => setAddress({...address, street})}
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
          onChange={(flat) => setAddress({...address, flat})}
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
          onChange={(floor) => setAddress({...address, floor})}
        />
      </View>
    </View>
  </>);
  
  const pickupMethod = () => (<>
    <View style={styles.deliveryDelimiter}/>
    {pickupPoints.map((point, index) => <React.Fragment key={index}>
      <View style={styles.deliveryPoint}>
        <Radio checked={point.checked} onPress={() => setPoint(point.id)}>
          <PointInfo {...point.data}/>
        </Radio>
      </View>
      <View style={styles.deliveryDelimiter}/>
    </React.Fragment>)}
  </>);
  
  return (<CheckoutSteps active={'DELIVERY'}>
    <View style={styles.delivery}>
      {!keyboardShown && <View style={styles.deliveryMethods}>
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
      </View>}
      {method === 'CURRIER' ? currierMethod() : pickupMethod()}
      {!keyboardShown && <View style={styles.deliveryConfirm}>
        <Button view={'FILLED'} type={'PRIMARY'} onPress={goToPaymentMethods}>
          {method === 'CURRIER' ? 'Подтвердить адресс' : 'Выбрать'}
        </Button>
      </View>}
    </View>
  </CheckoutSteps>);
};

export {Delivery};
/* libraries and plugins */
import React, {useState} from 'react';
import {Keyboard, Text, View} from 'react-native';
/* locals */
import PromoCodeFieldProps from './interface';
import styles from './styles';
/* shared */
import {Input} from 'shared/text-field/index.ios';
import {Button} from 'shared/button/index.ios';
/* icons */
import IcoCross from 'images/ico_cross.svg';
import IcoArrowForward from 'images/ico_arrow_forward.svg';

const PromoCodeField = (props: PromoCodeFieldProps) => {
  const {applied, submitPromoCode} = props;
  
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  
  const showError = (fn:Function) => {
    setError(!applied);
    
    return fn();
  }
  
  const hideKeyBoard = (fn: Function) => {
    applied && Keyboard.dismiss();
    
    return fn();
  }
  
  return (
    <View style={styles.promoCodeField}>
      <Input
        type={'TEXT'}
        value={applied ? 'Промокод применен' : code}
        placeholder={'Введите промокод'}
        editable={!applied}
        isActive={applied}
        button={<Button
          type={applied ? 'secondary' : 'primary'}
          view={'filled'}
          Icon={applied ? IcoCross : IcoArrowForward}
          onPress={() => applied
            ? submitPromoCode('')
            : hideKeyBoard(() => showError(() => submitPromoCode(code)))}
        />}
        setValue={setCode}
      />
      {error && <View style={styles.promoCodeField}>
        <Text>Не верный промокод</Text>
      </View>}
    </View>
  );
};


export {PromoCodeField};
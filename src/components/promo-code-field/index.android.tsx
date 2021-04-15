/* libraries and plugins */
import React, {useState} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
/* locals */
import PromoCodeFieldProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* shared */
import {Input} from 'shared/text-field/index.ios';
import {Button} from 'shared/button/index.ios';
/* icons */
import IcoCross from 'images/ico_cross.svg';
import IcoArrowForward from 'images/ico_arrow_forward.svg';

const PromoCodeField = (props: PromoCodeFieldProps) => {
  const {applied, submitPromoCode} = props;
  
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  
  const showError = (fn: Function) => {
    setError(!applied);
    
    return fn();
  };
  
  const hideKeyBoard = (fn: Function) => {
    applied && Keyboard.dismiss();
    
    return fn();
  };
  
  const errorMessage = () => (<View style={styles.promoCodeFieldErrorWrapper}>
    <View style={styles.promoCodeFieldError}>
      <Text>Не верный промокод</Text>
      <Pressable onPress={() => setError(false)}>
        <IcoCross color={COLORS.FOREGROUND_SECONDARY}/>
      </Pressable>
    </View>
  </View>);
  
  return (
    <>
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
        onFocus={() => setError(false)}
        setValue={setCode}
      />
      {error && errorMessage()}
    </>
  
  );
};


export {PromoCodeField};
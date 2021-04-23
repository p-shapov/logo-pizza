/* libraries and plugins */
import React, {useState} from 'react';
import {Keyboard, Pressable, Text, View} from 'react-native';
/* locals */
import PromoCodeFieldProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* shared */
import {TextField} from 'shared/text-field/index';
import {Button} from 'shared/button/index';
/* icons */
import IcoCross from 'images/ico_cross.svg';
import IcoArrowForward from 'images/ico_arrow_forward.svg';

const PromoCodeField = ({applied, submitPromoCode}: PromoCodeFieldProps) => {
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  
  const onChange = (val: string) => {
    setError(false);
    setCode(val);
  };
  
  const onFocus = () => {
    setError(false);
  };
  
  const submitOrClear = () => {
    if (applied) {
      submitPromoCode('');
      setError(false);
      Keyboard.dismiss();
    } else {
      submitPromoCode(code);
      setError(!applied);
    }
  };
  
  const errorMessage = () => (<View style={styles.promoCodeFieldErrorWrapper}>
    <View style={styles.promoCodeFieldError}>
      <Text style={styles.promoCodeFieldErrorText}>Не верный промокод</Text>
      <Pressable style={styles.promoCodeFieldErrorClose} onPress={() => setError(false)}>
        <IcoCross color={COLORS.FOREGROUND_SECONDARY}/>
      </Pressable>
    </View>
  </View>);
  
  return (<>
    <TextField
      type={'TEXT'}
      value={applied ? 'Промокод применен' : code}
      placeholder={'Введите промокод'}
      editable={!applied}
      isActive={applied}
      button={<Button
        type={applied ? 'SECONDARY' : 'PRIMARY'}
        view={'FILLED'}
        Icon={applied ? IcoCross : IcoArrowForward}
        onPress={submitOrClear}
      />}
      onFocus={onFocus}
      onChange={onChange}
    />
    {!applied && error && errorMessage()}
  </>);
};

export {PromoCodeField};
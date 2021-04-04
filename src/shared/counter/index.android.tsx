/* libraries and plugins */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
/* locals */
import CounterProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';
/* icons */
import IcoCounterDec from 'images/ico_counter_dec.svg';
import IcoCounterInc from 'images/ico_counter_inc.svg';

const Counter = (props: CounterProps) => {
  const {
    count,
    maxCount,
    onChange
  } = props;
  
  const handleChange = (type: 'inc' | 'dec') => {
    switch (type) {
      case 'dec':
        return count > 1 && onChange(count - 1);
      case 'inc':
        return count < maxCount && onChange(count + 1);
    }
  };
  
  return (
    <View style={styles.counter}>
      <Pressable style={styles.counterButton} onPress={() => handleChange('dec')}>
        <IcoCounterDec color={COLORS.FOREGROUND_PRIMARY_ACTIVE}/>
      </Pressable>
      <Text style={styles.counterValue}>{count}</Text>
      <Pressable style={styles.counterButton} onPress={() => handleChange('inc')}>
        <IcoCounterInc color={COLORS.FOREGROUND_PRIMARY_ACTIVE}/>
      </Pressable>
    </View>
  );
};

export {Counter};
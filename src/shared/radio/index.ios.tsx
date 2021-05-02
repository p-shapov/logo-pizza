/* libraries and plugins */
import React from 'react';
import {Pressable, View} from 'react-native';
/* locals */
import RadioProps from './interface';
import styles from './styles';

const Radio = (props: RadioProps) => {
  const {checked, children, onPress} = props;

  return (<Pressable
    style={styles.radio}
    onPress={onPress}
  >
    <View style={checked ? styles.radioMarkOuterActive : styles.radioMarkOuter}>
      {checked && <View style={styles.radioMarkInner}/>}
    </View>
    <View style={styles.radioGap}/>
    {children}
  </Pressable>);
};

export {Radio};
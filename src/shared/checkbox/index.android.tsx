/* libraries and plugins */
import React from 'react';
import {Pressable, View} from 'react-native';
/* locals */
import styles from './styles';
import CheckboxProps from './interface';

const Checkbox = ({checked, children, onPress}: CheckboxProps) => {
  return (<Pressable style={styles.checkbox} onPress={onPress}>
    <View style={checked ? styles.checkboxMarkOuterActive : styles.checkboxMarkOuter}>
      {checked && (<View style={styles.checkboxMarkInner}/>)}
    </View>
    <View style={styles.checkboxGap}/>
    {children}
  </Pressable>);
};

export {Checkbox};
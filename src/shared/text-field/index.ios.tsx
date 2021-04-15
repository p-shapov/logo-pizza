/* libraries and plugins */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
/* locals */
import styles from './styles';
import InputProps from './interface';

const Input = (props: InputProps) => {
  const {placeholder, label, type, button, editable, isActive, value, onFocus, setValue} = props;
  
  const input = (type: InputProps['type']) => {
    switch (type) {
      case 'TEXT':
        return (
          <TextInput
            style={isActive ? styles.textFieldInputActive : styles.textFieldInput}
            editable={editable !== undefined ? editable : true}
            value={value}
            placeholder={placeholder}
            onFocus={onFocus !== undefined ? onFocus : () => {}}
            onChangeText={setValue}
          />
        );
    }
  };
  
  return (
    <View style={styles.textField}>
      {label && <Text>{label}</Text>}
      {input(type)}
      {button && <View style={styles.textFieldButton}>{button}</View>}
    </View>
  );
};

export {Input};
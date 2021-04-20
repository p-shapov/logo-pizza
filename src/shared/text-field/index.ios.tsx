/* libraries and plugins */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
/* locals */
import styles from './styles';
import InputProps from './interface';

const TextField = (props: InputProps) => {
  const {placeholder, label, type, button, editable, isActive, value, onFocus, onChange} = props;
  
  const input = (type: InputProps['type']) => {
    switch (type) {
      case 'TEXT':
        return (
          <TextInput
            style={isActive ? styles.textFieldInputActive : styles.textFieldInput}
            editable={editable !== undefined ? editable : true}
            value={value}
            placeholder={placeholder}
            spellCheck={false}
            autoCorrect={false}
            onFocus={onFocus !== undefined ? onFocus : () => {}}
            onChangeText={onChange}
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

export {TextField};
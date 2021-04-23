/* libraries and plugins */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
/* locals */
import styles from './styles';
import InputProps from './interface';
/* globals */
import {COLORS} from 'globals/constants';

const TextField = (props: InputProps) => {
  const {placeholder, label, type, button, editable, isActive, disabled, value, onFocus, onChange, getRef} = props;
  
  const input = (type: InputProps['type']) => {
    switch (type) {
      case 'TEXT':
        return (<TextInput
          ref={(ref) => getRef ? getRef(ref) : false}
          style={isActive ? styles.textFieldInputActive : styles.textFieldInput}
          editable={editable !== undefined ? editable : true}
          value={value}
          placeholder={placeholder}
          autoCorrect={false}
          spellCheck={false}
          underlineColorAndroid={'transparent'}
          selectionColor={COLORS.FOREGROUND_PRIMARY_SUBTLE}
          onFocus={onFocus !== undefined ? onFocus : () => false}
          onChangeText={onChange}
        />);
    }
  };
  
  return (<View style={label
    ? disabled ? styles.textFieldWithLabelDisabled : styles.textFieldWithLabel
    : disabled ? styles.textFieldDisabled : styles.textField}
  >
    {label && (<View style={styles.textFieldLabelWrapper}>
      <Text style={styles.textFieldLabel}>{label}</Text>
    </View>)}
    {input(type)}
    {button && (<View style={styles.textFieldButton}>{button}</View>)}
  </View>);
};

export {TextField};
/* libraries and plugins */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
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
      case 'PHONE':
        return (<TextInputMask
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '+7 (999) 999-99-99'
          }}
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
      case 'MULTILINE':
        return (<TextInput
          ref={(ref) => getRef ? getRef(ref) : false}
          style={isActive ? styles.textFieldInputActive : styles.textFieldInput}
          editable={editable !== undefined ? editable : true}
          value={value}
          placeholder={placeholder}
          multiline={true}
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
    ? disabled
      ? type === 'MULTILINE'
        ? styles.textFieldMultilineWithLabelDisabled : styles.textFieldWithLabelDisabled
      : type === 'MULTILINE'
        ? styles.textFieldMultilineWithLabel : styles.textFieldWithLabel
    : disabled
      ? type === 'MULTILINE'
        ? styles.textFieldMultilineDisabled : styles.textFieldDisabled
      : type === 'MULTILINE'
        ? styles.textFieldMultiline : styles.textField}
  >
    {label && (
      <View style={type === 'MULTILINE' ? styles.textFieldMultilineLabelWrapper : styles.textFieldLabelWrapper}>
        <Text style={styles.textFieldLabel}>{label}</Text>
      </View>)}
    {input(type)}
    {button && (<View style={styles.textFieldButton}>{button}</View>)}
  </View>);
};

export {TextField};
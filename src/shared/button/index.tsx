import React from 'react';
import {Pressable, Text} from 'react-native';
/* locals */
import IButton from './interface';
import styles from './styles';

const Button = (props: IButton) => {
  const {
    children,
    type,
    onPress
  } = props;
  
  const getContainerStyles = () => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
    }
  };
  
  const getTextStyles = () => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimaryText;
      case 'secondary':
        return styles.buttonSecondaryText;
    }
  };
  
  return (
    <Pressable style={getContainerStyles()} onPress={onPress}>
      <Text style={getTextStyles()}>{children}</Text>
    </Pressable>
  );
}

export {Button};
/* libraries and plugins */
import React from 'react';
import {Pressable, Text} from 'react-native';
/* locals */
import IButton from './interface';
import styles from './styles';
import {COLORS} from 'globals/constants';

const Button = (props: IButton) => {
  const {
    children,
    type,
    Icon,
    onPress
  } = props;
  
  const getContainerStyles = () => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimary;
      case 'secondary':
        return styles.buttonSecondary;
      case 'disabled':
        return styles.buttonDisabled;
    }
  };
  
  const getTextStyles = () => {
    switch (type) {
      case 'primary':
        return styles.buttonPrimaryText;
      case 'secondary':
        return styles.buttonSecondaryText;
      case 'disabled':
        return styles.buttonDisabledText;
    }
  };
  
  const getIconColor = () => {
    switch (type) {
      case 'primary':
        return COLORS.FOREGROUND_SECONDARY;
      case 'secondary':
        return COLORS.FOREGROUND_PRIMARY_ACTIVE;
      case 'disabled':
        return COLORS.FOREGROUND_PRIMARY;
    }
  };
  
  return (
    <Pressable style={getContainerStyles()} onPress={onPress}>
      {Icon !== undefined && <Icon color={getIconColor()}/>}
      {children !== undefined && <Text style={getTextStyles()}>{children}</Text>}
    </Pressable>
  );
};

export {Button};
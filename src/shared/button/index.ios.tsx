/* libraries and plugins */
import React from 'react';
import {Pressable, Text} from 'react-native';
/* locals */
import IButton from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';

const Button = (props: IButton) => {
  const {
    children,
    type,
    view,
    Icon,
    onPress
  } = props;
  
  const getContainerStyles = () => {
    switch (type) {
      case 'primary':
        switch (view) {
          case 'filled':
            return styles.buttonPrimaryFilled;
          case 'shaped':
            return styles.buttonPrimaryShaped;
        }
        break;
      case 'secondary':
        switch (view) {
          case 'filled':
            return styles.buttonSecondaryFilled;
          case 'shaped':
            return styles.buttonSecondaryShaped;
        }
        break;
    }
  };
  
  const getTextStyles = () => {
    switch (type) {
      case 'primary':
        switch (view) {
          case 'filled':
            return styles.buttonPrimaryFilledText;
          case 'shaped':
            return styles.buttonPrimaryShapedText;
        }
        break;
      case 'secondary':
        switch (view) {
          case 'filled':
            return styles.buttonSecondaryFilledText;
          case 'shaped':
            return styles.buttonSecondaryShapedText;
        }
        break;
    }
  };
  
  const getIconColor = () => {
    switch (type) {
      case 'primary':
        switch (view) {
          case 'filled':
            return COLORS.FOREGROUND_SECONDARY;
          case 'shaped':
            return COLORS.FOREGROUND_PRIMARY_ACTIVE;
        }
        break;
      case 'secondary':
        switch (view) {
          case 'filled':
            return COLORS.FOREGROUND_SECONDARY;
          case 'shaped':
            return COLORS.FOREGROUND_PRIMARY;
        }
        break;
    }
  };
  
  return (
    <Pressable style={getContainerStyles()} onPress={onPress}>
      {Icon !== undefined && (<Icon color={getIconColor()}/>)}
      {children !== undefined && (<Text style={getTextStyles()}>{children}</Text>)}
    </Pressable>
  );
};

export {Button};
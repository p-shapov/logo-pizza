/* libraries and plugins */
import React from 'react';
import {Pressable, Text} from 'react-native';
/* locals */
import IButton from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';

const Button = (props: IButton) => {
  const {children, type, view, Icon, onPress} = props;
  
  const getContainerStyles = () => {
    switch (type) {
      case 'PRIMARY':
        switch (view) {
          case 'FILLED':
            return styles.buttonPrimaryFilled;
          case 'SHAPED':
            return styles.buttonPrimaryShaped;
        }
        break;
      case 'SECONDARY':
        switch (view) {
          case 'FILLED':
            return styles.buttonSecondaryFilled;
          case 'SHAPED':
            return styles.buttonSecondaryShaped;
        }
        break;
    }
  };
  
  const getTextStyles = () => {
    switch (type) {
      case 'PRIMARY':
        switch (view) {
          case 'FILLED':
            return styles.buttonPrimaryFilledText;
          case 'SHAPED':
            return styles.buttonPrimaryShapedText;
        }
        break;
      case 'SECONDARY':
        switch (view) {
          case 'FILLED':
            return styles.buttonSecondaryFilledText;
          case 'SHAPED':
            return styles.buttonSecondaryShapedText;
        }
        break;
    }
  };
  
  const getIconColor = () => {
    switch (type) {
      case 'PRIMARY':
        switch (view) {
          case 'FILLED':
            return COLORS.FOREGROUND_SECONDARY;
          case 'SHAPED':
            return COLORS.FOREGROUND_PRIMARY_ACTIVE;
        }
        break;
      case 'SECONDARY':
        switch (view) {
          case 'FILLED':
            return COLORS.FOREGROUND_SECONDARY;
          case 'SHAPED':
            return COLORS.FOREGROUND_PRIMARY;
        }
        break;
    }
  };
  
  return (<Pressable style={getContainerStyles()} onPress={onPress}>
    {Icon !== undefined && (<Icon color={getIconColor()}/>)}
    {children !== undefined && (<Text style={getTextStyles()}>{children}</Text>)}
  </Pressable>);
};

export {Button};
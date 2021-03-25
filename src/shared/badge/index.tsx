import React from 'react';
import {Text, View} from 'react-native';
/* locals */
import IBadge from './interface';
import styles from './styles';

const Badge = (props: IBadge) => {
  const {
    children,
    type
  } = props;
  
  const getContainerStyles = () => {
    switch (type) {
      case 'filled':
        return styles.badgeFilled;
      case 'shaped':
        return styles.badgeShaped;
    }
  };
  
  const getTextStyles = () => {
    switch (type) {
      case 'filled':
        return styles.badgeFilledText;
      case 'shaped':
        return styles.badgeShapedText;
    }
  };
  
  return (
    <View style={getContainerStyles()}>
      <Text style={getTextStyles()}>{children}</Text>
    </View>
  );
};

export {Badge};
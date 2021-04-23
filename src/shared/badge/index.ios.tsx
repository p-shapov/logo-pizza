/* libraries and plugins */
import React from 'react';
import {Text, View} from 'react-native';
/* locals */
import IBadge from './interface';
import styles from './styles';

const Badge = ({children, type}: IBadge) => {
  const getContainerStyles = () => {
    switch (type) {
      case 'FILLED':
        return styles.badgeFilled;
      case 'SHAPED':
        return styles.badgeShaped;
    }
  };
  
  const getTextStyles = () => {
    switch (type) {
      case 'FILLED':
        return styles.badgeFilledText;
      case 'SHAPED':
        return styles.badgeShapedText;
    }
  };
  
  return (<View style={getContainerStyles()}>
    <Text style={getTextStyles()}>{children}</Text>
  </View>);
};

export {Badge};
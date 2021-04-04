/* libraries and plugins */
import React from 'react';
import {Pressable, Text, View} from 'react-native';
/* locals */
import LinkProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';

const Link = ({label, children, Icon}: LinkProps) => {
  return (
    <View>
      {label !== undefined && <Text style={styles.linkLabel}>{label}</Text>}
      <Pressable style={styles.linkButton}>
        <Icon color={COLORS.FOREGROUND_PRIMARY_SUBTLE}/>
        <Text style={styles.linkText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export {Link};
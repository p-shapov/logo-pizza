/* libraries and plugins */
import React from 'react';
import {Linking, Pressable, Text, View} from 'react-native';
/* locals */
import LinkProps from './interface';
import styles from './styles';
/* globals */
import {COLORS} from 'globals/constants';

const Link = ({label, children, href, Icon}: LinkProps) => {
  const onPress = () => Linking.openURL(href);

  return (<View>
    {label !== undefined && <Text style={styles.linkLabel}>{label}</Text>}
    <Pressable style={styles.linkButton} onPress={onPress}>
      <Icon color={COLORS.FOREGROUND_PRIMARY_SUBTLE}/>
      <Text style={styles.linkText}>{children}</Text>
    </Pressable>
  </View>);
};

export {Link};
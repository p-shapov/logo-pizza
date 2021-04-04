/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  linkLabel: {
    marginBottom: 8,
    fontFamily: 'Rubik',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.FOREGROUND_PRIMARY_SUBTLE
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    fontFamily: 'Rubik',
    marginLeft: 12,
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.FOREGROUND_PRIMARY
  }
});


export default styles;
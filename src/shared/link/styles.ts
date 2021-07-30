/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {COLORS} from 'globals/constants';
import {font} from 'globals/helpers';

const styles = StyleSheet.create({
  linkLabel: {
    marginBottom: 8,
    ...font('regular', 14, 20, COLORS.FOREGROUND_PRIMARY_SUBTLE)
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  linkText: {
    marginLeft: 12,
    ...font('regular', 18, 21, COLORS.FOREGROUND_PRIMARY)
  }
});


export default styles;
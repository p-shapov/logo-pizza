/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {font, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 118,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  counterButton: {
    ...padding(11, 12, 10)
  },
  counterValue: {
    ...font('semi-bold', 14, 17, COLORS.FOREGROUND_PRIMARY),
    letterSpacing: .5
  }
});

export default styles;
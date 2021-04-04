/* libraries and plugins */
import {StyleSheet} from 'react-native';
import {padding} from 'globals/helpers';
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
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY
  }
});

export default styles;
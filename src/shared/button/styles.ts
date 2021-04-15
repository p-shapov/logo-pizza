/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  buttonPrimaryFilled: {
    alignItems: 'center',
    ...padding(15, 16),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  buttonPrimaryShaped: {
    alignItems: 'center',
    ...padding(14, 15),
    backgroundColor: COLORS.FOREGROUND_SECONDARY,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  buttonSecondaryFilled: {
    alignItems: 'center',
    ...padding(15, 16),
    backgroundColor: COLORS.FOREGROUND_PRIMARY,
    borderRadius: 8
  },
  buttonSecondaryShaped: {
    alignItems: 'center',
    ...padding(14, 15),
    backgroundColor: COLORS.FOREGROUND_SECONDARY,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_DISABLED,
    borderRadius: 8
  },
  buttonPrimaryFilledText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_SECONDARY
  },
  buttonPrimaryShapedText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  },
  buttonSecondaryShapedText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY
  },
  buttonSecondaryFilledText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_SECONDARY
  },
});

export default styles;
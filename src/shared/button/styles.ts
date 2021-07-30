/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {font, padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  buttonPrimaryFilled: {
    alignItems: 'center',
    ...padding(15, 16),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  buttonDisabledPrimaryFilled: {
    alignItems: 'center',
    ...padding(15, 16),
    backgroundColor: COLORS.FOREGROUND_SECONDARY_ACTIVE,
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
  buttonDisabledPrimaryShaped: {
    alignItems: 'center',
    ...padding(14, 15),
    backgroundColor: COLORS.FOREGROUND_SECONDARY,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_SECONDARY_ACTIVE,
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
    ...font('semi-bold', 14, 17, COLORS.FOREGROUND_SECONDARY),
    letterSpacing: .5
  },
  buttonPrimaryShapedText: {
    ...font('semi-bold', 14, 17, COLORS.FOREGROUND_PRIMARY_ACTIVE),
    letterSpacing: .5
  },
  buttonSecondaryShapedText: {
    ...font('semi-bold', 14, 17, COLORS.FOREGROUND_PRIMARY),
    letterSpacing: .5
  },
  buttonSecondaryFilledText: {
    ...font('semi-bold', 14, 17, COLORS.FOREGROUND_SECONDARY),
    letterSpacing: .5
  },
});

export default styles;
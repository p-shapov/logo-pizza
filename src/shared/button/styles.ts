import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  buttonPrimary: {
    ...padding(15, 0),
    backgroundColor: COLORS.BUTTON_PRIMARY_BACKGROUND
  },
  buttonSecondary: {
    ...padding(14, 0),
    backgroundColor: COLORS.BUTTON_PRIMARY_BACKGROUND,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BUTTON_PRIMARY_FOREGROUND
  },
  buttonPrimaryText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.56,
    color: COLORS.BUTTON_PRIMARY_FOREGROUND
  },
  buttonSecondaryText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.56,
    color: COLORS.BUTTON_SECONDARY_FOREGROUND
  }
});

export default styles;
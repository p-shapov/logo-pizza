import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    ...padding(15, 0),
    backgroundColor: COLORS.BUTTON_PRIMARY_BACKGROUND,
    borderRadius: 8
  },
  buttonSecondary: {
    ...padding(14, 0),
    backgroundColor: COLORS.BUTTON_PRIMARY_BACKGROUND,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BUTTON_PRIMARY_FOREGROUND,
    borderRadius: 8
  },
  buttonPrimaryText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 1,
    color: COLORS.BUTTON_PRIMARY_FOREGROUND
  },
  buttonSecondaryText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 1,
    color: COLORS.BUTTON_SECONDARY_FOREGROUND
  }
});

export default styles;
/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    ...padding(15, 0),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  buttonSecondary: {
    alignItems: 'center',
    ...padding(14, 0),
    backgroundColor: COLORS.FOREGROUND_SECONDARY,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  buttonPrimaryText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_SECONDARY
  },
  buttonSecondaryText: {
    fontFamily: 'Rubik-SemiBold',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  }
});

export default styles;
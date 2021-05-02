/* libraries and plugins */
import {StyleSheet} from 'react-native';
/* globals */
import {padding} from 'globals/helpers';
import {COLORS} from 'globals/constants';

const styles = StyleSheet.create({
  badgeFilled: {
    ...padding(9, 16),
    backgroundColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  badgeShaped: {
    ...padding(8, 15),
    backgroundColor: COLORS.FOREGROUND_SECONDARY,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.FOREGROUND_PRIMARY_ACTIVE,
    borderRadius: 8
  },
  badgeFilledText: {
    textAlign: 'center',
    fontFamily: 'Rubik-SemiBold',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_SECONDARY
  },
  badgeShapedText: {
    textAlign: 'center',
    fontFamily: 'Rubik-SemiBold',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: .5,
    color: COLORS.FOREGROUND_PRIMARY_ACTIVE
  }
});

export default styles;
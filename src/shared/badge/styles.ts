import {StyleSheet} from 'react-native';
/* globals */
import {padding} from '../../globals/helpers';
import {COLORS} from '../../globals/constants';

const styles = StyleSheet.create({
  badgeFilled: {
    ...padding(9, 16),
    backgroundColor: COLORS.BADGE_FILLED_BACKGROUND,
    borderRadius: 8
  },
  badgeShaped: {
    ...padding(8, 15),
    backgroundColor: COLORS.BADGE_SHAPED_BACKGROUND,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BADGE_SHAPED_FOREGROUND,
    borderRadius: 8
  },
  badgeFilledText: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: 1,
    color: COLORS.BADGE_FILLED_FOREGROUND
  },
  badgeShapedText: {
    textAlign: 'center',
    fontSize: 13,
    lineHeight: 14,
    letterSpacing: 1,
    color: COLORS.BADGE_SHAPED_FOREGROUND
  }
});

export default styles;